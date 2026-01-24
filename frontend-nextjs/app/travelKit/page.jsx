"use client";
import Notify from "@/components/Notify";
import ProfileBtn from "@/components/ProfileBtn";
import { useEffect } from "react";
import { useState } from "react";

const TravelKit = ({ user_id }) => {
    const [location, setLocation] = useState([]);
    const [travelKit, setTravelKit] = useState([]);
    const [travelKitItems, setTravelKitItems] = useState([]);
    //for location search base dropdown
    const [destinationQuery, setDestinationQuery] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    //for travel kit items search base dropdown
    const [travelKitItemsQuery, setTravelKitItemsQuery] = useState("");
    const [filteredTravelKitItems, setFilteredTravelKitItems] = useState([]);
    const [showTravelKitItemsDropdown, setShowTravelKitItemsDropdown] = useState(false);

    useEffect(() => {
        const getAllLocation = async () => {
            //get all location
            const response = await fetch("http://127.0.0.1:8000/travelkit/AllLocation/");
            const data = await response.json();
            setLocation(data.data);
            console.log("Location", data.data);
        }
        const getAllTravelKits = async () => {
            //get all travel kits(Set)
            const response = await fetch("http://127.0.0.1:8000/travelkit/AllTravelKitInfo/");
            const data = await response.json();
            setTravelKit(data.data);
            console.log("TravelKit", data.data);
        }
        const getAllTravelKitsItems = async () => {
            //get all travel kits items
            const response = await fetch("http://127.0.0.1:8000/travelkit/AllTravelKitItems/");
            const data = await response.json();
            setTravelKitItems(data.data);
            console.log("TravelKitItems", data.data);
        }
        getAllLocation();
        getAllTravelKits();
        getAllTravelKitsItems();
    }, []);

    const handleDestinationChange = (e) => {
        //handle destination change
        const value = e.target.value;
        setDestinationQuery(value);

        if (value.trim() === "") {
            setFilteredLocations([]);
            setShowDropdown(false);
            return;
        }

        const filtered = location.filter((loc) =>
            loc.name.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredLocations(filtered);
        setShowDropdown(true);
    };

    const handleTravelKitItemsChange = (e) => {
        //handle travel kit items change
        const value = e.target.value;
        setTravelKitItemsQuery(value);

        if (value.trim() === "") {
            setFilteredTravelKitItems([]);
            setShowTravelKitItemsDropdown(false);
            return;
        }

        const filtered = travelKitItems.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredTravelKitItems(filtered);
        setShowTravelKitItemsDropdown(true);
    };

    const handleSelectLocation = (loc) => {
        //handle select location
        setDestinationQuery(loc.name);
        setShowDropdown(false);
    };
    const handleSelectTravelKitItems = (item) => {
        //handle select travel kit items
        setTravelKitItemsQuery(item.name);
        setShowTravelKitItemsDropdown(false);
    };


    return (
        <div className='travelKit-content'>
            <div className="selective-content">
                <div className="dasNav">
                    <h1>TRAVEL KIT</h1>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    </div>
                    <div className="userInfo">
                        <Notify></Notify>
                        <ProfileBtn></ProfileBtn>
                    </div>
                </div>
                <div className="travelKit-content-inner">
                    <div className="travelKit-content-upper">
                        <div className="travelKit-content-upper-left">
                            <div className="travelKit-content-upper-left-top">
                                <h2>Search Destinations</h2>
                                {/* <input
                                    type="text"
                                    placeholder="Preferred Destination"
                                    className="search-input"
                                /> */}
                                <div className="dropdown-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Preferred Destination"
                                        className="search-input"
                                        value={destinationQuery}
                                        onChange={handleDestinationChange}
                                        onFocus={() => destinationQuery && setShowDropdown(true)}
                                    />

                                    {showDropdown && filteredLocations.length > 0 && (
                                        <ul className="dropdown">
                                            {filteredLocations.map((loc) => (
                                                <li
                                                    key={loc.id}
                                                    onClick={() => handleSelectLocation(loc)}
                                                    className="dropdown-item"
                                                >
                                                    <button>{loc.name}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="travelKit-content-upper-left-bottom">
                                <h2>Suggested Items</h2>
                                <div className="default-search-item">
                                    <img src="./default-Search.png" alt="Search result" />
                                    <h3>Search for item recommendations</h3>
                                </div>
                            </div>
                        </div>
                        <div className="travelKit-content-upper-right">
                            <div className="favSection">
                                <h1>FAVOURITE DESTINATIONS</h1>
                                <div className="fav_default">
                                    <img src="/fav_default.svg" alt="" />
                                </div>
                                <h2>No Favourites</h2>
                                <p>You can add an item to your favourites by clicking “Star Icon”</p>
                            </div>
                        </div>
                    </div>
                    <div className="travelKit-content-middle">
                        <h2>Extra Items</h2>
                        {/* <input
                            type="text"
                            placeholder="Search......"
                            className="search-input"
                        /> */}
                        <div className="dropdown-wrapper">
                            <input
                                type="text"
                                placeholder="Search......"
                                className="search-input"
                                value={travelKitItemsQuery}
                                onChange={handleTravelKitItemsChange}
                                onFocus={() => travelKitItemsQuery && setShowTravelKitItemsDropdown(true)}
                            />

                            {showTravelKitItemsDropdown && filteredTravelKitItems.length > 0 && (
                                <ul className="dropdown">
                                    {filteredTravelKitItems.map((item) => (
                                        <li
                                            key={item.id}
                                            onClick={() => handleSelectTravelKitItems(item)}
                                            className="dropdown-item"
                                        >
                                            <button>{item.name}</button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="default-search-item">
                            <img src="./default-search-1.svg" alt="Search result" />
                            <h3>Search for items</h3>
                        </div>
                    </div>
                    <div className="travelKit-content-lower">
                        <h2>Saved travel items set</h2>
                        <ul className="saved-items">
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TravelKit;
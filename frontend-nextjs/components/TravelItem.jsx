import { useState } from "react";
const TravelItem = ({ Image, Name, Description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div 
            className={`travel-item ${isExpanded ? "expanded" : ""}`} 
            onClick={toggleExpand}
            role="button"           
            tabIndex={0}            
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand();
                }
            }}>
            <div className="item-img">
                <img src={Image} alt="" />
            </div>

            <div className="item-info">
                <h1>{Name}</h1>
                <span>{Description}</span>
            </div>
        </div>
    );
};
export default TravelItem;
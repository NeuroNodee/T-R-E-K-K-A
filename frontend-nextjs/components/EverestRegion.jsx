// src/components/places/EverestRegion.jsx
import PlaceModal from "./PlaceModal";   // adjust path based on your folder structure

const EverestRegion = ({ handleEverestRegionState }) => {
  const EverestRegionConfig = {
    placeName: "Everest",
    placeName2: "Region",
    images: [
      "everest1.png",
      "everest2.png",
      "everest3.png",
    ],
    subtitles: [
      "Home of the World's Highest Peak",
      "Sherpa Culture • Himalayan Landscapes",
      "Gateway to Everest Base Camp",
    ],
    leftEmojiImages: [
      "mountain.svg",   // Everest & Himalayan peaks
      "tour-guide.png",    // Sherpa villages & culture
      "flag.png",    // Buddhism & monasteries
    ],

    rightEmojiImages: [
      "trek.svg",        // Trekking activities
      "hiking.png",        // Mountaineering
      "base.png",       // Everest Base Camp
    ],

    leftTexts: [
      "Mount Everest 8,848 m highest peak",
      "Solukhumbu dramatic valleys glaciers",
      "Sherpa villages Khumjung Khunde Phortse",
      "Ancient monasteries colorful prayer flags",
      "Sagarmatha National Park UNESCO site",
      "Glacial rivers alpine forests wildlife",
    ],
    rightTexts: [
      "Everest Base Camp ultimate trek",
      "Gokyo Lakes Three Passes routes",
      "Mountaineering peak climbing expeditions",
      "Namche Bazaar Sherpa capital hub",
      "Scenic thrilling Lukla flight",
      "Photography glacier walks viewpoints",
    ],

    onClose: handleEverestRegionState,
  };

  return <PlaceModal {...EverestRegionConfig} />;
};

export default EverestRegion;
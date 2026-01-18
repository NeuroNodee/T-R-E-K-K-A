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
      "Mount Everest (8,848.86 m) and surrounding Himalayan giants",
      "Solukhumbu region with dramatic valleys and glaciers",
      "Sherpa villages like Khumjung, Khunde, and Phortse",
      "Ancient monasteries and colorful prayer flags",
      "Sagarmatha National Park – UNESCO World Heritage Site",
      "Glacial rivers, alpine forests, and high-altitude wildlife",
    ],

    rightTexts: [
      "Everest Base Camp (EBC) trek – the ultimate Himalayan journey",
      "High-altitude trekking routes like Gokyo Lakes & Three Passes",
      "Mountaineering and peak climbing expeditions",
      "Explore Namche Bazaar – the Sherpa capital",
      "Scenic flight to Lukla – one of the world's most thrilling airports",
      "Photography, glacier walks, and mountain viewpoints",
    ],

    onClose: handleEverestRegionState,
  };

  return <PlaceModal {...EverestRegionConfig} />;
};

export default EverestRegion;
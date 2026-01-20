// src/components/places/Dhaulagiri.jsx
import PlaceModal from "./PlaceModal";

const Dhaulagiri = ({ handleDhaulagiriState }) => {
  const DhaulagiriConfig = {
    placeName: "Dhaulagiri",
    placeName2: "Massif",
    images: [
      "dhau3.jpg",
      "dhau2.jpg",
      "dhau1.jpg",
    ],
    subtitles: [
      "White Mountain • 7th Highest Peak on Earth",
      "Remote Himalayan Giant • Epic Circuit Trek",
      "High Passes & Glaciers • Untouched Wilderness",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "peak.png",
      "snow.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "snow.png",
      "base.png",
    ],
    leftTexts: [
      "Dhaulagiri I (8,167 m) seventh highest",
      "Massif with multiple 7,000+ m peaks",
      "Dazzling white snow faces rise dramatically",
      "Remote region less crowded than Annapurna",
      "Diverse forests, meadows and glaciers",
      "Snow leopards, blue sheep, rhododendrons",
    ],
    rightTexts: [
      "Dhaulagiri Circuit Trek legendary loop",
      "Italian, Glacier & Dhaulagiri Base Camps",
      "Hidden Valley surreal high plateau",
      "Panoramas of 20+ Himalayan peaks",
      "Camping through Magar villages & glaciers",
      "Thrilling for experienced trekkers only",
    ],
    onClose: handleDhaulagiriState,
  };

  return <PlaceModal {...DhaulagiriConfig} />;
};

export default Dhaulagiri;
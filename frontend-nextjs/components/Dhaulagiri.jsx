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
      "Dhaulagiri I (8,167 m) – seventh highest mountain in the world",
      "Massif with multiple 7,000+ m peaks: Dhaulagiri II, III, IV, V & Tukche Peak",
      "Dazzling white snow faces rising dramatically from deep valleys",
      "Part of pristine Dhaulagiri region – remote & less crowded than Annapurna",
      "Diverse terrain: dense forests, alpine meadows, glaciers & moraines",
      "Rich biodiversity – snow leopards, blue sheep, yaks & rhododendron blooms",
    ],
    rightTexts: [
      "Dhaulagiri Circuit Trek – legendary high-altitude loop.",
      "Explore three iconic base camps: Italian Base Camp, Glacier Camp & Dhaulagiri Base Camp (4,740 m)",
      "Hidden Valley traverse – surreal, desolate high plateaus.",
      "Panoramic vistas of 20+ peaks including Annapurna, Manaslu.",
      "Camping adventure through Magar villages & wild glacial landscapes",
      "Thrilling for experienced trekkers – combine with Poon Hill.",
    ],
    onClose: handleDhaulagiriState,
  };

  return <PlaceModal {...DhaulagiriConfig} />;
};

export default Dhaulagiri;
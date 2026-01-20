// src/components/places/Annapurna.jsx
import PlaceModal from "./PlaceModal";

const Annapurna = ({ handleAnnapurnaState }) => {
  const AnnapurnaConfig = {
    placeName: "Annapurna",
    placeName2: "Region",
    images: [
      "anna1.png",
      "anna2.jpg",
      "anna3.jpg",
    ],
    subtitles: [
      "World's Best Trekking Paradise • Himalayan Giants",
      "Annapurna Base Camp • Classic Routes & Views",
      "Diverse Trails • Poon Hill to Circuit Trek",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "peak.png",
      "unity.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "base.png",
      "sunrise.png",
    ],
    leftTexts: [
      "Annapurna I (8,091 m) tenth highest",
      "Annapurna Sanctuary dramatic views",
      "Machhapuchhre, South, Hiunchuli dominate skyline",
      "Subtropical forests to alpine glaciers",
      "Gurung, Magar, Thakali villages hospitality",
      "Rhododendrons, wildlife in conservation area",
    ],
    rightTexts: [
      "ABC Trek to 4,130 m views",
      "Poon Hill short sunrise trek",
      "Annapurna Circuit classic long trek",
      "Mardi Himal quiet ridge walk",
      "Short treks from Pokhara viewpoints",
      "Combine ABC, Poon Hill, Tilicho",
    ],
    onClose: handleAnnapurnaState,
  };

  return <PlaceModal {...AnnapurnaConfig} />;
};

export default Annapurna;
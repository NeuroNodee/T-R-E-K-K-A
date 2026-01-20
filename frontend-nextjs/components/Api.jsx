// src/components/places/ApiHimal.jsx
import PlaceModal from "./PlaceModal";

const Api = ({ handleApiState }) => {
  const ApiConfig = {
    placeName: "Api",
    placeName2: "Himal",
    images: [
      "api1.jpg",
      "api2.jpg",
      "api3.jpg",
    ],
    subtitles: [
      "Far-West Nepal's Highest Peak • Remote Giant",
      "Api Nampa Conservation Area • Untouched Beauty",
      "Challenging Trek • Epic Himalayan Views",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "snow.png",
      "tree.svg",
    ],
    rightEmojiImages: [
      "trek.svg",
      "base.png",
      "wildlife.png",
    ],
    leftTexts: [
      "Api (7,132 m) – highest in far-west",
      "Remote Api Himal massif beauty",
      "Api Nampa Conservation Area protected",
      "Snow leopard and musk deer habitat",
      "Dramatic snow-capped peaks surround",
      "Pristine alpine meadows and forests",
    ],
    rightTexts: [
      "Api Base Camp Trek adventure",
      "Challenging high-altitude route views",
      "Epic panoramas of Nampa Chiurani",
      "Remote wilderness photography paradise",
      "Combine with Saipal or Byas trek",
      "Untouched nature for serious trekkers",
    ],
    onClose: handleApiState,
  };

  return <PlaceModal {...ApiConfig} />;
};

export default Api;
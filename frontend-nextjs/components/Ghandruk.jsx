// src/components/places/Ghandruk.jsx
import PlaceModal from "./PlaceModal";

const Ghandruk = ({ handleGhandrukState }) => {
  const GhandrukConfig = {
    placeName: "Ghandruk",
    placeName2: "Village",
    images: [
      "village1.jpg",
      "village2.jpg",
      "village3.jpg",
    ],
    subtitles: [
      "Iconic Gurung Village • Stunning Annapurna Views",
      "Traditional Stone Houses • Warm Hospitality",
      "Gateway to Annapurna Treks • Cultural Gem",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "village.svg",
      "festival.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "sunrise.png",
      "house.png",
    ],
    leftTexts: [
      "Panoramic views of Annapurna South",
      "Traditional Gurung settlement at 1,940 m",
      "Gurung Museum showcases Gurkha heritage",
      "Rich Gurung culture and traditions",
      "Rhododendron forests and birdwatching area",
      "Easy access from Pokhara weekend escape",
    ],
    rightTexts: [
      "Magical sunrise on snow-capped peaks",
      "Gateway to Poon Hill and ABC treks",
      "Authentic Gurung homestays with dal bhat",
      "Short hikes to viewpoints and hot springs",
      "Shop handmade handicrafts and woolens",
      "Peaceful family-friendly photography spot",
    ],
    onClose: handleGhandrukState,
  };

  return <PlaceModal {...GhandrukConfig} />;
};

export default Ghandruk;
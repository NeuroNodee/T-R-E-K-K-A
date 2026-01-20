// src/components/places/SheyPhoksundo.jsx
import PlaceModal from "./PlaceModal";

const Shey = ({ handleSheyState }) => {
  const SheyConfig = {
    placeName: "Shey Phoksundo",
    placeName2: "National Park",
    images: [
      "park1.jpg",
      "park2.jpg",
      "park3.jpg",
    ],
    subtitles: [
      "Nepal's Largest National Park",
      "Remote Dolpo Wilderness",
      "High-Altitude Desert",
    ],
    leftEmojiImages: [
      "lake.png",
      "monastery.png",
      "mountain.svg",
    ],
    rightEmojiImages: [
      "trek.svg",
      "tour.png",
      "river.png",
    ],
    leftTexts: [
      "Phoksundo Lake – Nepal's deepest & most beautiful lake.",
      "National Park – largest protected area in Nepal",
      "Arid plateaus, deep gorges & dramatic peaks",
      "Snow leopards, blue sheep, & Himalayan wolves",
      "Ancient Shey Gompa (Crystal Monastery)",
      "Unique Dolpo culture – Tibetan-influenced villages.",
    ],
    rightTexts: [
      "Phoksundo Lake Trek – with epic views",
      "Lower Dolpo Circuit – trek through monasteries",
      "Upper Dolpo Trek – remote high-altitude adventure",
      "Shey Gompa & Tsakang Gompa, ancient rock-carved monasteries",
      "Wildlife spotting & photography",
      "Combine with Jomsom or Mustang",
    ],
    onClose: handleSheyState,
  };

  return <PlaceModal {...SheyConfig} />;
};

export default Shey;
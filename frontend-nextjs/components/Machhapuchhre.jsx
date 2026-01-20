// src/components/places/Machhapuchhre.jsx
import PlaceModal from "./PlaceModal";

const Machhapuchhre = ({ handleMachhapuchhreState }) => {
  const MachhapuchhreConfig = {
    placeName: "Machhapuchhre",
    placeName2: "",
    images: [
      "machha2.jpg",
      "machha1.jpg",
      "machha3.jpg",
    ],
    subtitles: [
      "Sacred Virgin Peak • Iconic Fishtail Summit",
      "Abode of Lord Shiva • Unclimbed Himalayan Beauty",
      "Trekker's Dream Landmark",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "temple.svg",
      "snow.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "sunrise.png",
      "businessman.png",
    ],
    leftTexts: [
      "6,993 m iconic twin-summit peak",
      "Sacred home of Lord Shiva",
      "Unclimbed – protected by government ban",
      "Steep profile nicknamed Matterhorn of Nepal",
      "Eastern boundary of Annapurna Sanctuary",
      "Stunning views from Pokhara & Sarangkot",
    ],
    rightTexts: [
      "Highlight of Annapurna Base Camp Trek",
      "MBC trek with epic panoramas",
      "Golden sunrise glow on snow",
      "World's most photogenic mountain",
      "Combine with Poon Hill or Mardi Himal",
      "Ideal for trekkers and photographers",
    ],
    onClose: handleMachhapuchhreState,
  };

  return <PlaceModal {...MachhapuchhreConfig} />;
};

export default Machhapuchhre;
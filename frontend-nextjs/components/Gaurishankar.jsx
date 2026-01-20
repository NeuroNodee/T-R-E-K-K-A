// src/components/places/Gaurishankar.jsx
import PlaceModal from "./PlaceModal";

const Gaurishankar = ({ handleGaurishankarState }) => {
  const GaurishankarConfig = {
    placeName: "Gaurishankar  ",
    placeName2: "",
    images: [
      "gau1.jpg",
      "gau2.jpg",
      "gau3.jpg",
    ],
    subtitles: [
      "Sacred Himalayan Peak • Shiva & Parvati Abode",
      "Rolwaling Valley • Remote Wilderness",
      "Biodiversity Hotspot • Sherpa & Tamang Culture",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "snow.png",
      "village.svg",
    ],
    rightEmojiImages: [
      "trek.svg",
      "tree.svg",
      "festival.png",
    ],
    leftTexts: [
      "Gaurishankar (7,134 m) sacred twin peak",
      "Rolwaling Himal pristine remote range",
      "Gaurishankar Conservation Area rich biodiversity",
      "Red panda snow leopard Himalayan tahr",
      "Sherpa Tamang Thami traditional villages",
      "Tsho Rolpa largest glacial lake Nepal",
    ],
    rightTexts: [
      "Rolwaling Valley Trek adventurous route",
      "Tsho Rolpa Na Glacier exploration",
      "Pikayo Ri epic high pass views",
      "Combine Gosaikunda or Everest treks",
      "Remote monasteries sacred cultural sites",
      "Mountaineering photography nature immersion paradise",
    ],
    onClose: handleGaurishankarState,
  };

  return <PlaceModal {...GaurishankarConfig} />;
};

export default Gaurishankar;
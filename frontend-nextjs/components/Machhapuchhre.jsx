// src/components/places/Gaurishankar.jsx
import PlaceModal from "./PlaceModal";

const Machhapuchhre = ({ handleMachhapuchhreState }) => {
  const MachhapuchhreConfig = {
    placeName: "Machhapuchhre  ",
    placeName2: "",
    images: [
      "machhapuchhre1.png",
      "machhapuchhre2.png",
      "machhapuchhre3.png",
    ],
    subtitles: [
      "Sacred Himalayan Peak • Shiva & Parvati Abode",
      "Rolwaling Valley • Remote Wilderness",
      "Biodiversity Hotspot • Sherpa & Tamang Culture",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "snow-peak.png",
      "forest.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "wildlife.png",
      "culture.png",
    ],
    leftTexts: [
      "Gaurishankar (7,134 m) – sacred twin peak of Shiva & Parvati",
      "Rolwaling Himal – one of Nepal's most pristine ranges",
      "Part of Gaurishankar Conservation Area – rich biodiversity",
      "Home to red panda, snow leopard & Himalayan tahr",
      "Sherpa, Tamang & Thami villages with traditional lifestyle",
      "Tsho Rolpa – largest glacial lake in Nepal",
    ],
    rightTexts: [
      "Rolwaling Valley Trek – adventurous & less crowded route",
      "Tsho Rolpa & Na Glacier exploration",
      "Pikayo Ri & other high passes for epic views",
      "Combine with Gosaikunda or Everest region treks",
      "Remote monasteries and sacred sites",
      "Excellent for mountaineering, photography & nature immersion",
    ],
    onClose: handleMachhapuchhreState,
  };

  return <PlaceModal {...MachhapuchhreConfig} />;
};

export default Machhapuchhre;
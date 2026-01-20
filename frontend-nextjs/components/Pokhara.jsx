// src/components/places/Pokhara.jsx
import PlaceModal from "./PlaceModal";

const Pokhara = ({ handlePokharaState }) => {
  const PokharaConfig = {
    placeName: "Pokhara",
    placeName2: "",
    images: [
      "pokhara1.jpg",
      "pokhara2.jpg",
      "pokhara3.jpg",
    ],
    subtitles: [
      "City of Lakes • Stunning Annapurna Reflections",
      "Adventure Capital • Paragliding & Boating Heaven",
      "Gateway to Himalayas • Relaxed Vibes & Culture",
    ],
    leftEmojiImages: [
      "river.png",
      "mountain.svg",
      "temple.svg",
    ],
    rightEmojiImages: [
      "para.png",
      "boat.png",
      "trek.svg",
    ],
    leftTexts: [
      "Phewa Lake mirrors Machhapuchhre peaks",
      "World Peace Pagoda hilltop views",
      "Tal Barahi Temple island shrine",
      "Lakeside vibrant cafes and shops",
      "Devi's Fall dramatic underground waterfall",
      "Mountain Museum climbing history exhibits",
    ],
    rightTexts: [
      "Paragliding over Phewa Lake epic flights",
      "Boating sunrise sunset on Phewa Lake",
      "Sarangkot legendary Annapurna sunrise viewpoint",
      "Gateway to Poon Hill ABC treks",
      "Ziplining bungee ultralight adventure activities",
      "Explore Begnas Rupa Lakes Tibetan settlements",
    ],
    onClose: handlePokharaState,
  };

  return <PlaceModal {...PokharaConfig} />;
};

export default Pokhara;
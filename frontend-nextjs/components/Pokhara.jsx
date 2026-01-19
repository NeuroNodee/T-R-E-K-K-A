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
      "Phewa Lake – serene waters mirroring Machhapuchhre (Fishtail) & Annapurna peaks",
      "World Peace Pagoda (Shanti Stupa) – hilltop views over lake & valley",
      "Tal Barahi Temple – sacred island shrine in the middle of Phewa Lake",
      "Lakeside (Baidam) – vibrant hub of cafes, shops & nightlife",
      "Devi's Fall – dramatic waterfall disappearing underground",
      "International Mountain Museum - climbing history",
    ],
    rightTexts: [
      "Paragliding over Phewa Lake – world-famous tandem flights with epic views",
      "Boating & sunrise/sunset paddles on Phewa Lake – pure magic",
      "Sarangkot viewpoint – legendary sunrise over Annapurna range",
      "Gateway to Annapurna treks – Poon Hill, ABC & short day hikes",
      "Adventure activities: ziplining, bungee, ultralight flights & more",
      "Explore Begnas & Rupa Lakes, caves, Tibetan settlements & local markets",
    ],
    onClose: handlePokharaState,
  };

  return <PlaceModal {...PokharaConfig} />;
};

export default Pokhara;
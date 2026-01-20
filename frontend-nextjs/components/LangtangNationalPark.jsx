// src/components/places/LangtangNationalPark.jsx
import PlaceModal from "./PlaceModal";

const LangtangNationalPark = ({ handleLangtangNationalParkState }) => {
  const LangtangConfig = {
    placeName: "Langtang",
    placeName2: "",
    images: [
      "langtang1.jpg",
      "langtang2.jpg",
      "langtang3.jpg",
    ],
    subtitles: [
      "First National Park of Nepal • Himalayan Wilderness",
      "Tamang Culture • Langtang Valley Trek",
      "Snow Leopards & Red Pandas • Alpine Beauty",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "tree.svg",
      "river.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "village.svg",
      "snow.png",
    ],
    leftTexts: [
      "Langtang Valley stunning glaciers scenery",
      "Rare wildlife red panda snow leopard",
      "Tamang Tibetan rich cultural heritage",
      "Kyanjin Gompa high-altitude Buddhist monastery",
      "Subtropical to alpine diverse ecosystems",
      "Langtang Lirung (7,227 m) dominant peak",
    ],
    rightTexts: [
      "Langtang Valley Trek scenic route",
      "Gosaikunda extension Laurebina Pass",
      "Bamboo rhododendron trails yak pastures",
      "Sacred sites Tserko Ri viewpoint",
      "Helambu circuit longer trek connection",
      "Photography birdwatching high-altitude camping",
    ],
    onClose: handleLangtangNationalParkState,
  };

  return <PlaceModal {...LangtangConfig} />;
};

export default LangtangNationalPark;
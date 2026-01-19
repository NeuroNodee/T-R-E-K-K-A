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
      "Langtang Valley – stunning alpine scenery and glaciers",
      "Home to rare wildlife: red panda, snow leopard, Himalayan black bear",
      "Tamang and Tibetan communities with rich cultural heritage",
      "Kyanjin Gompa – iconic Buddhist monastery at high altitude",
      "Diverse ecosystems from subtropical to alpine tundra",
      "Langtang Lirung (7,227 m) – dominant peak of the region",
    ],
    rightTexts: [
      "Langtang Valley Trek – one of Nepal's most scenic routes",
      "Gosaikunda trek extension via Laurebina Pass",
      "Explore bamboo forests, rhododendron trails & yak pastures",
      "Sacred sites including Tserko Ri viewpoint",
      "Helambu circuit connection for longer journeys",
      "Photography, birdwatching & high-altitude camping",
    ],
    onClose: handleLangtangNationalParkState,
  };

  return <PlaceModal {...LangtangConfig} />;
};

export default LangtangNationalPark;
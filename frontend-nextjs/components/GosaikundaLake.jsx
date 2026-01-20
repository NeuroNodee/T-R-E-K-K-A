// src/components/places/GosaikundaLake.jsx
import PlaceModal from "./PlaceModal";

const GosaikundaLake = ({ handleGosaikundaLakeState }) => {
  const GosaikundaConfig = {
    placeName: "Gosaikunda",
    placeName2: "Lake",
    images: [
      "go3.png",
      "go2.jpg",
      "go1.jpg",
    ],
    subtitles: [
      "Sacred Alpine Lake • Hindu & Buddhist Pilgrimage",
      "Janai Purnima Festival • High Himalayan Shrine",
      "Surrounded by 108 Lakes • Spiritual & Scenic",
    ],
    leftEmojiImages: [
      "lake.svg",
      "temple.svg",
      "pray.png",
    ],
    rightEmojiImages: [
      "festival.png",
      "trek.svg",
      "mountain.svg",
    ],
    leftTexts: [
      "Holy lake at 4,380 meters altitude",
      "Abode of Lord Shiva revered site",
      "Surrounded by dramatic Himalayan peaks",
      "Laurebina Pass stunning panorama viewpoint",
      "Ancient stone shrines around lake",
      "Protected in Langtang National Park",
    ],
    rightTexts: [
      "Popular Gosaikunda high-altitude pilgrimage trek",
      "Janai Purnima thousands of pilgrims",
      "Combine with Langtang or Helambu trek",
      "High meadows yak herds alpine flora",
      "Spiritual bathing in sacred freezing waters",
      "Epic sunrise mountain reflection photography",
    ],
    onClose: handleGosaikundaLakeState,
  };

  return <PlaceModal {...GosaikundaConfig} />;
};

export default GosaikundaLake;
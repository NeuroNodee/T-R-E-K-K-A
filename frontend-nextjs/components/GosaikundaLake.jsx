// src/components/places/GosaikundaLake.jsx
import PlaceModal from "./PlaceModal";

const GosaikundaLake = ({ handleGosaikundaLakeState }) => {
  const GosaikundaConfig = {
    placeName: "Gosaikunda",
    placeName2: "Lake",
    images: [
      "gosaikunda1.png",
      "gosaikunda2.png",
      "gosaikunda3.png",
    ],
    subtitles: [
      "Sacred Alpine Lake • Hindu & Buddhist Pilgrimage",
      "Janai Purnima Festival • High Himalayan Shrine",
      "Surrounded by 108 Lakes • Spiritual & Scenic",
    ],
    leftEmojiImages: [
      "lake.png",
      "temple.svg",
      "prayer-flag.png",
    ],
    rightEmojiImages: [
      "pilgrim.png",
      "trek.svg",
      "mountain.svg",
    ],
    leftTexts: [
      "Holy lake at 4,380 m – revered in Hindu & Buddhist traditions",
      "Believed to be abode of Lord Shiva (Gosaikunda = Shiva's lake)",
      "Surrounded by dramatic peaks and smaller sacred lakes",
      "Laurebina Pass viewpoint – stunning Himalayan panorama",
      "Ancient stone shrines and statues around the lake",
      "Part of Langtang National Park protected area",
    ],
    rightTexts: [
      "Gosaikunda Trek – popular high-altitude pilgrimage route",
      "Janai Purnima / Raksha Bandhan festival – thousands of pilgrims",
      "Combine with Langtang Valley or Helambu trek",
      "High-altitude meadows, yak herds & alpine flora",
      "Spiritual bathing ritual in freezing sacred waters",
      "Epic sunrise & mountain reflection photography",
    ],
    onClose: handleGosaikundaLakeState,
  };

  return <PlaceModal {...GosaikundaConfig} />;
};

export default GosaikundaLake;
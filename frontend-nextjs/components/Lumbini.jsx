// src/components/places/Lumbini.jsx
import PlaceModal from "./PlaceModal";

const Lumbini = ({ handleLumbiniState }) => {
  const LumbiniConfig = {
    placeName: "Lumbini",
    placeName2: "Buddha",
    images: [
      "lumbini1.jpg",
      "lumbini2.jpg",
      "lumbini3.jpg",
    ],
    subtitles: [
      "Sacred Birthplace of Lord Buddha • UNESCO World Heritage",
      "Maya Devi Temple • Peaceful Pilgrimage Site",
      "International Monasteries • Spiritual Harmony",
    ],
    leftEmojiImages: [
      "buddha.png",
      "temple.svg",
      "gate.png",
    ],
    rightEmojiImages: [
      "pray.png",
      "gardening.png",
      "stupa.png",
    ],
    leftTexts: [
      "Birthplace of Siddhartha Gautama (Lord Buddha) in 623 BCE – holiest Buddhist site",
      "Maya Devi Temple – marks exact spot of Buddha's birth with ancient ruins & sacred pond",
      "Ashoka Pillar – inscribed by Emperor Ashoka in 249 BCE confirming the birthplace",
      "Sacred Garden & Puskarni Pond – peaceful setting where Queen Maya Devi bathed",
      "Monastic Zone – over 40 international monasteries built by countries worldwide",
      "Peaceful Terai plains atmosphere – ideal for meditation & reflection",
    ],
    rightTexts: [
      "Pilgrimage to Maya Devi Temple – walk the sacred path & see the marker stone",
      "Explore diverse monasteries – Thai, German, Chinese, Vietnamese, Korean & more",
      "World Peace Pagoda – serene stupa offering panoramic views & meditation",
      "Sacred Bodhi tree & eternal flame – symbols of enlightenment & peace",
      "Quiet walks in gardens & reflection pools – perfect for mindfulness & photography",
      "Combine with nearby Kapilvastu ruins or Devdaha – deeper Buddhist heritage experience",
    ],
    onClose: handleLumbiniState,
  };

  return <PlaceModal {...LumbiniConfig} />;
};

export default Lumbini;
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
      "Birthplace of Lord Buddha 623 BCE",
      "Maya Devi Temple marks birth spot",
      "Ashoka Pillar confirms birthplace 249 BCE",
      "Sacred Garden and Puskarni Pond",
      "Over 40 international monasteries zone",
      "Peaceful Terai plains for meditation",
    ],
    rightTexts: [
      "Pilgrimage to Maya Devi Temple",
      "Explore Thai, German, Chinese monasteries",
      "World Peace Pagoda panoramic views",
      "Sacred Bodhi tree and eternal flame",
      "Quiet garden walks for mindfulness",
      "Combine with Kapilvastu or Devdaha ruins",
    ],
    onClose: handleLumbiniState,
  };

  return <PlaceModal {...LumbiniConfig} />;
};

export default Lumbini;
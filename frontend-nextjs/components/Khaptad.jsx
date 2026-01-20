// src/components/places/Khaptad.jsx
import PlaceModal from "./PlaceModal";

const Khaptad = ({ handleKhaptadState }) => {
  const KhaptadConfig = {
    placeName: "Khaptad",
    placeName2: "",
    images: [
      "khaptad1.jpg",
      "khaptad2.jpg",
      "khaptad3.jpg",
    ],
    subtitles: [
      "Peaceful Highland Paradise • Rolling Meadows",
      "Rhododendron Heaven • Spiritual Ashram",
      "Far-West Nepal Gem • Serene Trekking",
    ],
    leftEmojiImages: [
      "meadow.png",
      "tree.svg",
      "flower.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "sunrise.png",
      "bird.png",
    ],
    leftTexts: [
      "Khaptad National Park – serene highland plateau",
      "Famous for vast green meadows and forests",
      "Spring rhododendron blooms in vibrant colors",
      "Swami Sachchidananda Ashram – spiritual retreat",
      "Over 560 flowering plants and herbs",
      "Rich birdlife with 287 recorded species",
    ],
    rightTexts: [
      "Khaptad National Park Trek adventure",
      "Sahastradhara sunrise viewpoint magic",
      "Explore Triveni and Khaptad Lake",
      "Peaceful birdwatching and nature walks",
      "Combine with nearby Doti or Bajhang",
      "Ideal for meditation and photography",
    ],
    onClose: handleKhaptadState,
  };

  return <PlaceModal {...KhaptadConfig} />;
};

export default Khaptad;
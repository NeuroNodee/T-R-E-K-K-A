// src/components/places/Kathmandu.jsx
import PlaceModal from "./PlaceModal";

const Kathmandu = ({ handleKathmanduState }) => {
  const KathmanduConfig = {
    placeName: "Kathmandu",
    placeName2: "",
    images: [
      "kathmandu1.jpg",
      "aboutus-back.png",
      "kathmandu3.jpg",
    ],
    subtitles: [
      "Gateway to Nepal • Blend of Ancient & Modern",
      "Sacred Stupas & Temples • Vibrant City Life",
      "UNESCO Heritage • Thamel Adventure Hub",
    ],
    leftEmojiImages: [
      "stupa.png",
      "temple.svg",
      "palace.png",
    ],
    rightEmojiImages: [
      "market.png",
      "trek.svg",
      "festival.png",
    ],
    leftTexts: [
      "Swayambhunath Monkey Temple valley panoramas",
      "Boudhanath massive Buddhist stupa site",
      "Pashupatinath holiest Hindu shrine riverside",
      "Kathmandu Durbar Square historic palace",
      "Garden of Dreams peaceful oasis",
      "Thamel vibrant shops cafes hub",
    ],
    rightTexts: [
      "Gateway to Himalayan treks adventures",
      "Thamel bustling markets street food",
      "Hindu Buddhist festivals year-round",
      "Ancient Newari architecture hidden courtyards",
      "Museums galleries Nepali heritage showcase",
      "Scenic viewpoints Nagarkot day trips",
    ],
    onClose: handleKathmanduState,
  };

  return <PlaceModal {...KathmanduConfig} />;
};

export default Kathmandu;
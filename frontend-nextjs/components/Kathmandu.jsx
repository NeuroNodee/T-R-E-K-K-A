// src/components/places/Kathmandu.jsx
import PlaceModal from "./PlaceModal"; // adjust path based on your folder structure

const Kathmandu = ({ handleKathmanduState }) => {
  const KathmanduConfig = {
    placeName: "Kathmandu",
    placeName2: "",
    images: [
      "kathmandu1.png",   // e.g., Swayambhunath Stupa (Monkey Temple) at sunrise
      "kathmandu2.png",   // e.g., Boudhanath Stupa with prayer wheels & flags
      "kathmandu3.png",   // e.g., Thamel bustling streets or Durbar Square temples
    ],
    subtitles: [
      "Gateway to Nepal • Blend of Ancient & Modern",
      "Sacred Stupas & Temples • Vibrant City Life",
      "UNESCO Heritage • Thamel Adventure Hub",
    ],
    leftEmojiImages: [
      "stupa.svg",        // Buddhist stupas like Swayambhunath & Boudhanath
      "temple.png",       // Hindu sites like Pashupatinath
      "palace.png",       // Durbar Squares & royal heritage
    ],
    rightEmojiImages: [
      "market.svg",       // Thamel shopping & nightlife
      "trek.png",         // Trekking gateway & mountain views
      "culture.png",      // Festivals & diverse traditions
    ],
    leftTexts: [
      "Swayambhunath (Monkey Temple) – ancient stupa with valley panoramas",
      "Boudhanath Stupa – massive Buddhist site & Tibetan influence",
      "Pashupatinath Temple – holiest Hindu shrine on Bagmati River",
      "Kathmandu Durbar Square – historic royal palace & intricate temples",
      "Garden of Dreams – peaceful escape amid urban chaos",
      "Thamel district – vibrant hub for shops, cafes & trekking gear",
    ],
    rightTexts: [
      "Gateway to Himalayan treks & adventure activities",
      "Bustling markets, street food & live music in Thamel",
      "Mix of Hindu & Buddhist festivals year-round",
      "Explore ancient Newari architecture & hidden courtyards",
      "Cultural museums & art galleries showcasing Nepali heritage",
      "Scenic viewpoints & nearby day trips to Nagarkot",
    ],
    onClose: handleKathmanduState,
  };

  return <PlaceModal {...KathmanduConfig} />;
};

export default Kathmandu;
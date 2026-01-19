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
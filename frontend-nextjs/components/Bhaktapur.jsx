// src/components/places/Bhaktapur.jsx
import PlaceModal from "./PlaceModal"; 

const Bhaktapur = ({ handleBhaktapurState }) => {
  const BhaktapurConfig = {
    placeName: "Bhaktapur",
    placeName2: "",
    images: [
      "bhaktapur1.jpg",   
      "bhaktapur2.jpg",   
      "bhaktapur3.png",  
    ],
    subtitles: [
      "Medieval Charm • Preserved Newari City",
      "Nyatapola & Durbar Square • UNESCO Gem",
      "Pottery & Yogurt • Living Traditions",
    ],
    leftEmojiImages: [
      "temple.svg",      
      "gate.png",        
      "pottery.png",     
    ],
    rightEmojiImages: [
      "palace.png",       
      "festival.png",     
      "food.png",         
    ],
    leftTexts: [
      "Bhaktapur Durbar Square – medieval royal palace & temples",
      "Nyatapola Temple – Nepal's tallest pagoda-style temple",
      "55 Windows Palace – intricate wood carvings masterpiece",
      "Golden Gate – stunning repoussé art entrance to palace",
      "Potters’ Square – traditional pottery making & clay works",
      "Taumadhi Square – vibrant hub with ancient architecture",
    ],
    rightTexts: [
      "Famous for Juju Dhau – creamy king curd specialty",
      "Explore preserved medieval streets & Newari lifestyle",
      "Wood carving, thangka painting & handicraft shops",
      "Bhairavnath Temple – towering pagoda & cultural significance",
      "Local festivals & evening pujas in ancient temples",
      "Peaceful escape from Kathmandu's hustle with timeless vibe",
    ],
    onClose: handleBhaktapurState,
  };

  return <PlaceModal {...BhaktapurConfig} />;
};

export default Bhaktapur;
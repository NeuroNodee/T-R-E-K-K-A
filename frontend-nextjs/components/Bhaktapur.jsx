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
      "Bhaktapur Durbar Square medieval palace",
      "Nyatapola tallest pagoda temple Nepal",
      "55 Windows Palace intricate wood carvings",
      "Golden Gate stunning repoussé artwork",
      "Potters’ Square traditional clay pottery",
      "Taumadhi Square vibrant ancient architecture",
    ],
    rightTexts: [
      "Famous Juju Dhau king curd specialty",
      "Preserved medieval streets Newari lifestyle",
      "Wood carving thangka handicraft shops",
      "Bhairavnath towering pagoda temple",
      "Local festivals evening pujas temples",
      "Peaceful timeless escape from Kathmandu",
    ],
    onClose: handleBhaktapurState,
  };

  return <PlaceModal {...BhaktapurConfig} />;
};

export default Bhaktapur;
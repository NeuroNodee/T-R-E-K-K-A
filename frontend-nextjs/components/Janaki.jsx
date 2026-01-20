// src/components/places/JanakiRegion.jsx  (or Janakpur.jsx — name it as you prefer)
import PlaceModal from "./PlaceModal"; // adjust path based on your folder structure

const Janaki = ({ handleJanakiState }) => {
  const JanakiConfig = {
    placeName: "Janakpur",
    placeName2: "Dham",
    images: [
      "janakpur1.png",   
      "janakpur2.jpg",   
      "janakpur3.jpg",   
    ],
    subtitles: [
      "Birthplace of Goddess Sita • Heart of Mithila",
      "Ram Janaki Temple • Ancient Kingdom Vibes",
      "City of Ponds • Mithila Art & Culture",
    ],
    leftEmojiImages: [
      "temple.svg",       
      "art.png",  
      "pond.png",         
    ],
    rightEmojiImages: [
      "festival.png",     
      "cultural.png",      
      "pray.png",      
    ],
    leftTexts: [
      "Janaki Mandir stunning marble temple",
      "Birthplace of Goddess Sita Janaki",
      "Ancient Mithila Kingdom Maithili culture",
      "Vibrant Madhubani paintings everywhere",
      "Over 100 sacred ponds city",
      "Ram Laxman Hanuman temples nearby",
    ],
    rightTexts: [
      "Vivah Panchami grand Ram-Sita wedding",
      "Ram Navami Chhath Puja festivals",
      "Vivah Mandap mythological marriage site",
      "Colorful markets Maithili cuisine",
      "Major Hindu pilgrimage destination",
      "Mithila folk art music literature",
    ],
    onClose: handleJanakiState,
  };

  return <PlaceModal {...JanakiConfig} />;
};

export default Janaki;
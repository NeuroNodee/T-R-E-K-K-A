
import PlaceModal from "./PlaceModal";

const Lalitpur = ({ handleLalitpurState }) => {
  const LalitpurConfig = {
    placeName: "Lalitpur",
    placeName2: "",
    images: [
      "patan2.jpg",       
      "patan1.jpg",       
      "patan3.jpg",       
    ],
    subtitles: [
      "City of Artisans • Finest Newari Craftsmanship",
      "Patan Durbar Square • UNESCO Masterpiece",
      "Metalwork & Museums • Living Heritage",
    ],
    leftEmojiImages: [
      "museum.png",       
      "temple.svg",       
      "monk.png",    
    ],
    rightEmojiImages: [
      "craft.png",     
      "festival.png",     
      "blueprint.png", 
    ],
    leftTexts: [
      "Patan Durbar Square stunning Newari architecture",
      "Krishna Mandir exquisite stone Shikhara temple",
      "Golden Temple beautiful Buddhist monastery",
      "Patan Museum world-class Nepali art",
      "Kumbeshwar ancient five-tiered Shiva pagoda",
      "Mahabouddha terracotta Buddha masterpiece temple",
    ],
    rightTexts: [
      "Renowned for metalwork wood carving handicrafts",
      "Rato Machhendranath vibrant chariot festival",
      "Explore artisan workshops Newari streets",
      "Ashokan Stupas ancient Buddhist markers",
      "Central Zoo Godawari Gardens relaxation",
      "Rich Newari Maithili cultural traditions",
    ],
    onClose: handleLalitpurState,
  };

  return <PlaceModal {...LalitpurConfig} />;
};

export default Lalitpur;
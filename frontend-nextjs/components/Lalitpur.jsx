
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
      "temple.png",       
      "monk.png",    
    ],
    rightEmojiImages: [
      "craft.png",     
      "festival.png",     
      "blueprint.png", 
    ],
    leftTexts: [
      "Patan Durbar Square – stunning Newari architecture & palace complex",
      "Krishna Mandir – exquisite 17th-century stone Shikhara temple",
      "Golden Temple (Hiranya Varna Mahavihar) – beautiful Buddhist monastery",
      "Patan Museum – world-class Nepali art, sculptures & artifacts",
      "Kumbeshwar Temple – ancient five-tiered pagoda dedicated to Shiva",
      "Mahabouddha Temple – terracotta masterpiece with thousands of Buddhas",
    ],
    rightTexts: [
      "Renowned for fine metalwork, wood carving & handicrafts",
      "Rato Machhendranath festival – vibrant chariot procession",
      "Explore artisan workshops & traditional Newari streets",
      "Ashokan Stupas – ancient Buddhist markers at city corners",
      "Central Zoo & nearby Godawari Botanical Gardens for relaxation",
      "Rich Maithili & Newari cultural traditions & festivals",
    ],
    onClose: handleLalitpurState,
  };

  return <PlaceModal {...LalitpurConfig} />;
};

export default Lalitpur;
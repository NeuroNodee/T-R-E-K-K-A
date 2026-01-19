// src/components/places/Lalitpur.jsx
import PlaceModal from "./PlaceModal"; // adjust path based on your folder structure

const Lalitpur = ({ handleLalitpurState }) => {
  const LalitpurConfig = {
    placeName: "Lalitpur",
    placeName2: "",
    images: [
      "patan1.png",       // e.g., Patan Durbar Square with temples & palace
      "patan2.png",       // e.g., Krishna Mandir stone-carved Shikhara style
      "patan3.png",       // e.g., Golden Temple (Hiranya Varna Mahavihar) courtyard
    ],
    subtitles: [
      "City of Artisans • Finest Newari Craftsmanship",
      "Patan Durbar Square • UNESCO Masterpiece",
      "Metalwork & Museums • Living Heritage",
    ],
    leftEmojiImages: [
      "museum.png",       // Patan Museum & art heritage
      "temple.svg",       // Krishna Mandir & ancient shrines
      "monastery.png",    // Golden Temple & Buddhist vihars
    ],
    rightEmojiImages: [
      "craft.png",        // Traditional metalwork & handicrafts
      "festival.svg",     // Rato Machhendranath Jatra & celebrations
      "architecture.png", // Intricate Newari wood & stone carvings
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
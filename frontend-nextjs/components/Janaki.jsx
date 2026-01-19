// src/components/places/JanakiRegion.jsx  (or Janakpur.jsx — name it as you prefer)
import PlaceModal from "./PlaceModal"; // adjust path based on your folder structure

const Janaki = ({ handleJanakiState }) => {
  const JanakiConfig = {
    placeName: "Janakpur",
    placeName2: "Dham",
    images: [
      "janakpur1.png",   // e.g., Janaki Mandir white marble facade
      "janakpur2.jpg",   // e.g., Vivah Mandap or Mithila art wall
      "janakpur3.jpg",   // e.g., sacred pond or colorful festival scene
    ],
    subtitles: [
      "Birthplace of Goddess Sita • Heart of Mithila",
      "Ram Janaki Temple • Ancient Kingdom Vibes",
      "City of Ponds • Mithila Art & Culture",
    ],
    leftEmojiImages: [
      "temple.svg",       // Janaki Mandir & sacred sites
      "art.png",  // Mithila/Madhubani paintings
      "pond.png",         // Sacred ponds & Ganga Sagar
    ],
    rightEmojiImages: [
      "festival.png",     // Vivah Panchami, Ram Navami celebrations
      "cultural.png",      // Maithili traditions & folk art
      "pray.png",      // Pilgrimage & spiritual journeys
    ],
    leftTexts: [
      "Janaki Mandir – stunning Mughal-Rajput style marble temple",
      "Birthplace of Sita (Janaki), consort of Lord Rama",
      "Ancient Mithila Kingdom – center of Maithili culture & language",
      "Vibrant Mithila art (Madhubani paintings) on walls & courtyards",
      "Over 100 sacred ponds – city known as 'City of Ponds'",
      "Ram Mandir, Laxman Temple, Hanuman Temple & more holy sites",
    ],
    rightTexts: [
      "Vivah Panchami – grand celebration of Ram-Sita wedding",
      "Ram Navami, Chhath Puja, Holi & Deepawali festivities",
      "Vivah Mandap – site of mythological Ram-Sita marriage",
      "Explore colorful markets & traditional Maithili cuisine",
      "Pilgrimage destination for Hindus from Nepal & India",
      "Mithila cultural heritage – folk art, music & literature",
    ],
    onClose: handleJanakiState,
  };

  return <PlaceModal {...JanakiConfig} />;
};

export default Janaki;
// src/components/places/Bhaktapur.jsx
import PlaceModal from "./PlaceModal"; // adjust path based on your folder structure

const Bhaktapur = ({ handleBhaktapurState }) => {
  const BhaktapurConfig = {
    placeName: "Bhaktapur",
    placeName2: "",
    images: [
      "bhaktapur1.png",   // e.g., Nyatapola Temple – tallest in Nepal
      "bhaktapur2.png",   // e.g., Bhaktapur Durbar Square with Golden Gate
      "bhaktapur3.png",   // e.g., Pottery Square with traditional clay pots
    ],
    subtitles: [
      "Medieval Charm • Preserved Newari City",
      "Nyatapola & Durbar Square • UNESCO Gem",
      "Pottery & Yogurt • Living Traditions",
    ],
    leftEmojiImages: [
      "temple.svg",       // Nyatapola & major pagoda temples
      "gate.png",         // Golden Gate & palace entrances
      "pottery.png",      // Potters’ Square & clay craftsmanship
    ],
    rightEmojiImages: [
      "palace.png",       // 55 Windows Palace & royal heritage
      "festival.svg",     // Local festivals & Newari culture
      "food.png",         // Famous Juju Dhau (king curd) & cuisine
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
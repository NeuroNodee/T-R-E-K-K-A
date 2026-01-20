// Illam.jsx (or wherever you open the modal)
import PlaceModal from "./PlaceModal";

const Illam = ({ handleIllamState }) => {
  const illamConfig = {
    placeName: "Ilām",
    placeName2: "",
    images: ["illam1.svg", "illam2.svg", "illam3.jpg"],
    subtitles: [
      "The Queen of Hills • Famous for Tea Gardens",
      "Cool hills and mist",
      "Tea gardens everywhere, Peaceful eastern Nepal",
    ],
    leftEmojiImages: ["leaf1.svg", "travel.png"],
    rightEmojiImages: ["hill.svg", "gardening.png"],
leftTexts: [
      "Endless rolling tea gardens emerald hills",
      "Famous orthodox & CTC tea estates",
      "Peaceful eastern Nepal hill station",
      "Winding roads to scenic viewpoints",
    ],
    rightTexts: [
      "Fresh air calm tea mornings",
      "Soft mountain breezes serene landscapes",
      "Scenic drives breathtaking hill views",
      "Ilām Bazaar Fikkal local markets",
    ],
    onClose: handleIllamState,
  };

  return <PlaceModal {...illamConfig} />;
};

export default Illam;
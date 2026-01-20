// src/components/places/SheyLake.jsx
import PlaceModal from "./PlaceModal";

const SheyLake = ({ handleSheyLakeState }) => {
  const SheyLakeConfig = {
    placeName: "Shey Lake",
    placeName2: "",
    images: [
      "shey1.jpg",
      "shey2.jpg",
      "shey3.jpg",
    ],
    subtitles: [
      "Nepal's Deepest Alpine Lake ",
      "Sacred Phoksundo ",
      "Remote Dolpo Beauty • Color-Changing Waters",
    ],
    leftEmojiImages: [
      "lake.png",
      "river.png",
      "monastery.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "boat.png",
      "pray.png",
    ],
    leftTexts: [
      "Deepest freshwater lake in Nepal",
      "Turquoise waters change colors daily",
      "Y-shaped alpine lake at 3,611 m",
      "Inside largest national park",
      "Sacred site for Bon & Buddhists",
      "Traditional Ringmo Village nearby",
    ],
    rightTexts: [
      "Scenic Phoksundo Lake Trek adventure",
      "Boating and peaceful lakeside walks",
      "Visit ancient Thasung Tsoling Gompa",
      "Spot snow leopards and blue sheep",
      "Combine with Lower Dolpo treks",
      "Perfect for photography and meditation",
    ],
    onClose: handleSheyLakeState,
  };

  return <PlaceModal {...SheyLakeConfig} />;
};

export default SheyLake;
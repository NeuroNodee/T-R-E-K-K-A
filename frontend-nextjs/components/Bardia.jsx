
import PlaceModal from "./PlaceModal";

const Bardia = ({ handleBardiaState }) => {
  const BardiaConfig = {
    placeName: "Bardia",
    placeName2: "National Park",
    images: [
      "bardia1.jpg",
      "bardia2.jpg",
      "bardia3.jpg",
    ],
    subtitles: [
      "Nepal's Largest & Wildest National Park • Tiger Haven",
      "Untouched Terai Jungle • Rhino & Elephant Spotting",
      "Authentic Safaris • Tharu Culture & Karnali River",
    ],
    leftEmojiImages: [
      "tiger.png",
      "rhino.png",
      "elephant.png",
    ],
    rightEmojiImages: [
      "jeep.png",
      "walk.png",
      "raft.png",
    ],
    leftTexts: [
      "Largest national park in Nepal (968 km²)",
      "Best chance to spot Royal Bengal Tigers",
      "One-horned rhinos, Asian elephants, swamp deer",
      "Over 400 bird species and migrants",
      "Karnali & Babai Rivers with crocodiles",
      "Diverse sal forests, grasslands & wetlands",
    ],
    rightTexts: [
      "Jeep Safari for thrilling wildlife spotting",
      "Jungle Walk to watering holes & rivers",
      "Canoe rafting on Karnali River scenic",
      "Elephant Safari & Tharu cultural dances",
      "Birdwatching and full-day nature immersion",
      "Combine fishing, camping or Tharu homestays",
    ],
    onClose: handleBardiaState,
  };

  return <PlaceModal {...BardiaConfig} />;
};

export default Bardia;

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
      "Largest national park in Nepal (968 km²) – pristine & least crowded Terai wilderness",
      "Home to Royal Bengal Tigers – one of Asia's best chances for sightings",
      "Greater one-horned rhinoceros, Asian elephants, swamp deer & wild boars",
      "Over 400 bird species including Bengal florican, sarus crane & great hornbill",
      "Karnali & Babai Rivers – home to gharial crocodiles & Gangetic dolphins",
      "Diverse ecosystems: sal forests, grasslands, riverine habitats & biodiversity hotspot",
    ],
    rightTexts: [
      "Jeep Safari – thrilling drives deep into the jungle for tiger & wildlife spotting",
      "Jungle Walk / Walking Safari – guided treks to watering holes & riverbanks",
      "Canoe / Rafting on Karnali River – scenic floats spotting birds, crocs & dolphins",
      "Elephant Safari & Tharu cultural experiences – traditional villages & dances",
      "Birdwatching & full-day adventures – peaceful immersion in untouched nature",
      "Combine with fishing, camping or Tharu homestays – authentic, off-beat Nepal escape",
    ],
    onClose: handleBardiaState,
  };

  return <PlaceModal {...BardiaConfig} />;
};

export default Bardia;
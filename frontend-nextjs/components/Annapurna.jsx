// src/components/places/Annapurna.jsx
import PlaceModal from "./PlaceModal";

const Annapurna = ({ handleAnnapurnaState }) => {
  const AnnapurnaConfig = {
    placeName: "Annapurna",
    placeName2: "Region",
    images: [
      "anna1.png",
      "anna2.jpg",
      "anna3.jpg",
    ],
    subtitles: [
      "World's Best Trekking Paradise • Himalayan Giants",
      "Annapurna Base Camp • Classic Routes & Views",
      "Diverse Trails • Poon Hill to Circuit Trek",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "peak.png",
      "unity.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "base.png",
      "sunrise.png",
    ],
    leftTexts: [
      "Annapurna I (8,091 m) – 10th highest peak in the world",
      "Annapurna Sanctuary – dramatic natural amphitheater surrounded by giants",
      "Machhapuchhre (Fishtail), Annapurna South, Hiunchuli & Gangapurna dominate the skyline",
      "Diverse landscapes: subtropical forests to alpine meadows & glaciers",
      "Gurung, Magar & Thakali villages with warm hospitality along trails",
      "Rich biodiversity in Annapurna Conservation Area – rhododendrons, wildlife & birds",
    ],
    rightTexts: [
      "Annapurna Base Camp (ABC) Trek – iconic journey to 4,130 m with 360° views",
      "Poon Hill Trek (Ghorepani–Poon Hill)– short, stunning sunrise over Dhaulagiri & Annapurna",
      "Annapurna Circuit Trek – one of the world's classic long-distance treks.",
      "Mardi Himal Trek – quieter, beautiful ridge walk with close-up Annapurna & Fishtail views",
      "Short treks from Pokhara: Australian Camp, Australian Base Camp & Landruk viewpoints",
      "Combine options: ABC + Poon Hill, Circuit + Tilicho Lake.",
    ],
    onClose: handleAnnapurnaState,
  };

  return <PlaceModal {...AnnapurnaConfig} />;
};

export default Annapurna;
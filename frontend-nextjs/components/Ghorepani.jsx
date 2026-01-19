// src/components/places/Ghorepani.jsx
import PlaceModal from "./PlaceModal";

const Ghorepani = ({ handleGhorepaniState }) => {
  const GhorepaniConfig = {
    placeName: "Ghorepani",
    placeName2: "Village",
    images: [
      "ghore1.jpg",
      "ghore2.jpg",
      "ghore3.jpg",
    ],
    subtitles: [
      "Magar & Gurung Gem • Rhododendron Haven",
      "Gateway to Poon Hill Sunrise • Annapurna Views",
      "Easy Trek Base • Warm Mountain Hospitality",
    ],
    leftEmojiImages: [
      "village.svg",
      "tree.svg",
      "festival.png",
    ],
    rightEmojiImages: [
      "sunrise.png",
      "trek.svg",
      "mountain.svg",
    ],
    leftTexts: [
      "Picturesque village at 2,874 m surrounded by lush rhododendron & oak forests",
      "Traditional Magar & Gurung settlement with stone houses & terraced fields",
      "Rich ethnic culture – generous locals, unique traditions & Gurkha heritage",
      "Historic stop on old Tibetan salt trade route – authentic mountain life",
      "Diverse flora & birdlife in Annapurna Conservation Area – spring blooms magical",
      "Cozy teahouses & homestays offering hearty dal bhat & heartfelt welcomes",
    ],
    rightTexts: [
      "Poon Hill sunrise (3,210 m) – legendary 360° panorama of Annapurna, Dhaulagiri.",
      "Short Ghorepani Poon Hill Trek – beginner-friendly, 4-5 days with epic views",
      "Early morning hike from village – golden light on snow-capped peaks.",
      "Combine with Ghandruk loop – add Gurung villages, terraced hills & more Himalayan vistas",
      "Family & first-timer favorite – moderate trails, teahouse stays & stunning scenery",
      "Photography paradise – capture mountain sunrises & village charm",
    ],
    onClose: handleGhorepaniState,
  };

  return <PlaceModal {...GhorepaniConfig} />;
};

export default Ghorepani;
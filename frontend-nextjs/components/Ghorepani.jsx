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
      "Picturesque village at 2,874 meters",
      "Surrounded by rhododendron and oak forests",
      "Traditional Magar & Gurung stone houses",
      "Rich Gurkha heritage and culture",
      "Historic Tibetan salt trade route stop",
      "Cozy teahouses with hearty dal bhat",
    ],
    rightTexts: [
      "Poon Hill legendary 360° sunrise panorama",
      "Short Ghorepani Poon Hill Trek 4-5 days",
      "Early morning hike golden peak light",
      "Combine with Ghandruk loop Gurung villages",
      "Family-friendly moderate trails teahouse stays",
      "Photography paradise mountain sunrises village charm",
    ],
    onClose: handleGhorepaniState,
  };

  return <PlaceModal {...GhorepaniConfig} />;
};

export default Ghorepani;
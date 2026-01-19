// src/components/places/Ghandruk.jsx
import PlaceModal from "./PlaceModal";

const Ghandruk = ({ handleGhandrukState }) => {
  const GhandrukConfig = {
    placeName: "Ghandruk",
    placeName2: "Village",
    images: [
      "village1.jpg",
      "village2.jpg",
      "village3.jpg",
    ],
    subtitles: [
      "Iconic Gurung Village • Stunning Annapurna Views",
      "Traditional Stone Houses • Warm Hospitality",
      "Gateway to Annapurna Treks • Cultural Gem",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "village.svg",
      "festival.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "sunrise.png",
      "house.png",
    ],
    leftTexts: [
      "Breathtaking panoramic views of Annapurna South, Machhapuchhre& Gangapurna",
      "Traditional Gurung settlement at ~1,940–2,012 m with stone-paved paths",
      "Gurung Museum – showcase of local history, costumes, tools & Gurkha heritage",
      "Rich Gurung culture – brave warriors, unique traditions & warm community life",
      "Rhododendron forests, birdwatching in Annapurna Conservation Area",
      "Easy access from Pokhara (~2 hrs drive + short trek)  perfect weekend escape",
    ],
    rightTexts: [
      "Iconic sunrise/sunset viewpoints – magical golden light on snow-capped peaks",
      "Gateway to popular treks: Poon Hill, Annapurna Base Camp & Ghorepani-Ghandruk loop",
      "Stay in authentic Gurung homestays – enjoy dal bhat, gundruk & heartfelt hospitality",
      "Short day hikes to nearby viewpoints& hot springs (Jhinu Danda)",
      "Shopping for handmade handicrafts, woolens & local souvenirs – support community",
      "Peaceful, family-friendly vibe – ideal for photographers& culture lovers.",
    ],
    onClose: handleGhandrukState,
  };

  return <PlaceModal {...GhandrukConfig} />;
};

export default Ghandruk;
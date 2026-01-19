// src/components/places/Machhapuchhre.jsx
import PlaceModal from "./PlaceModal";

const Machhapuchhre = ({ handleMachhapuchhreState }) => {
  const MachhapuchhreConfig = {
    placeName: "Machhapuchhre",
    placeName2: "",
    images: [
      "machha2.jpg",
      "machha1.jpg",
      "machha3.jpg",
    ],
    subtitles: [
      "Sacred Virgin Peak • Iconic Fishtail Summit",
      "Abode of Lord Shiva • Unclimbed Himalayan Beauty",
      "Trekker's Dream Landmark",
    ],
    leftEmojiImages: [
      "mountain.svg",
      "temple.svg",
      "snow.png",
    ],
    rightEmojiImages: [
      "trek.svg",
      "sunrise.png",
      "businessman.png",
    ],
    leftTexts: [
      "6,993 m iconic peak with distinctive twin summits resembling a fish's tail",
      "Sacred to Hindus & Gurung people – believed to be home of Lord Shiva",
      "Unclimbed & protected – Nepal government bans summiting to preserve sanctity",
      "Dramatic steep profile – nicknamed 'Matterhorn of Nepal'",
      "Forms eastern boundary of Annapurna Sanctuary – pristine alpine basin",
      "Stunning close-up views from Pokhara, Sarangkot & Ghandruk",
    ],
    rightTexts: [
      "Highlight of Annapurna Base Camp Trek – unforgettable close encounters",
      "Machhapuchhre Base Camp (MBC) trek – moderate route with epic panoramas",
      "Sunrise/sunset magic – golden glow on snow from viewpoints like Australian Camp",
      "Perfect for photography – one of the world's most photogenic mountains",
      "Combine with Poon Hill, Mardi Himal or short day hikes from Pokhara",
      "Spiritual & scenic allure – ideal for nature lovers, trekkers & culture seekers",
    ],
    onClose: handleMachhapuchhreState,
  };

  return <PlaceModal {...MachhapuchhreConfig} />;
};

export default Machhapuchhre;
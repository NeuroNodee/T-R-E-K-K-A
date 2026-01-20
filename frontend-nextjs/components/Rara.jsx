// src/components/places/Rara.jsx
import PlaceModal from "./PlaceModal";

const Rara = ({ handleRaraState }) => {
  const RaraConfig = {
    placeName: "Rara",
    placeName2: "",
    images: [
      "rara1.jpg",
      "rara2.jpg",
      "rara3.jpg",
    ],
    subtitles: [
      "Nepal's Largest Alpine Lake • Pristine Himalayan Gem",
      "Rara National Park • Untouched Wilderness",
      "Color-Changing Waters • Remote Serenity & Views",
    ],
    leftEmojiImages: [
      "lake.png",
      "mountain.svg",
      "tree.svg",
    ],
    rightEmojiImages: [
      "trek.svg",
      "bird.png",
      "boat.png",
    ],
    leftTexts: [
      "Rara Lake (Mahendra Tal) – Nepal's largest freshwater lake.",
      "Lake changes color up to 5 times a day.",
      "Surrounded by coniferous forests & peaks.",
      "Rara National Park (smallest in Nepal, 106 km²) ",
      "Red panda, musk deer, Himalayan black bear...",
      "Over 200 bird species & rare snow trout in the lake",
    ],
    rightTexts: [
      "Rara Lake Trek – remote, with epic Himalayan panoramas",
      "Boating on Rara Lake water-level views & reflections",
      "Birdwatching & wildlife spotting & elusive mammals",
      "Short hikes, breathtaking 360° lake & mountain vistas",
      "Camping/lodging near the lake.",
      "Perfect for photographers& nature purists.",
    ],
    onClose: handleRaraState,
  };

  return <PlaceModal {...RaraConfig} />;
};

export default Rara;
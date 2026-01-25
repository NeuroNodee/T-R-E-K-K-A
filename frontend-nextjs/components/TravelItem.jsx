"use client";
import { useState, memo } from "react";

const TravelItem = memo(({ Image, Name, Description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setIsSelected(!isSelected);
  };
  const handleKeyboard = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div
      className={`travel-item ${isExpanded ? "expanded" : ""} ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyboard}
    >
      <div className="item-img">
        <img src={Image} alt={Name} loading="lazy" width={320} height="180" />
      </div>

      <div className="item-info">
        <h2>{Name}</h2>
        <div className="description">{Description}</div>
      </div>
    </div>
  );
});

export default TravelItem;

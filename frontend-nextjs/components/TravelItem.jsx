"use client";
import { useState, memo } from "react";

const TravelItem = memo(({ Image, Name, Description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`travel-item ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(v => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsExpanded(v => !v);
        }
      }}
    >
      <div className="item-img">
        {/* <img src={Image} alt="" loading="lazy" width={320} height={180} decoding="async"/> */}
      </div>

      <div className="item-info">
        <h1>{Name}</h1>
        {isExpanded && <span>{Description}</span>}
      </div>
    </div>
  );
});

export default TravelItem;

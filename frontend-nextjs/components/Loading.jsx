"use client";

import React from "react";

const Loading = ({ text = "Loading" }) => {
  return (
    <div className="loading-overlay">
      <div className="loading-box">
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
};

export default Loading;

// src/components/BackgroundStars.jsx
import React from "react";
import "../styles/_backgroundStars.scss";

const BackgroundStars = () => {
  return (
    <div className="stars-wrapper" aria-hidden="true">
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>
  );
};

export default BackgroundStars;

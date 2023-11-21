import React from "react";
import "./InfoBox.scss";

const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <div className={`info-box ${bgColor}`}>
      <span className="info-icon --color-white">{icon}</span>
      <div className="info-text">
        <p>{title}</p>
        <h4>{count}</h4>
      </div>
    </div>
  );
};

export default InfoBox;

import { useState } from "react";
// import "./Hero.css";

function Feature(props) {
  return (
    <div className="feature-box">
      <div className="feature-icon">{props.icon}</div>
      <p className="feature-title">{props.title}</p>
      <p className="feature-description">{props.description}</p>
    </div>
  );
}

export default Feature;

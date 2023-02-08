import { useState } from "react";
import viteLogoLarge from "./assets/logo-with-shadow.png";
import "./Hero.css";

function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div className="hero">
      <div className="hero--container">
        <div className="main">
          <h1 className="main--title">Vite</h1>
          <p className="main--subtitle">Next Generation Frontend Tooling</p>
          <p className="main--body">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
          <div className="actions-container">
            <div className="btn btn-primary">
              {" "}
              <a href="#">Get Started</a>
            </div>
            <div className="btn">
              {" "}
              <a href="#">Why Vite?</a>{" "}
            </div>
            <div className="btn">
              {" "}
              <a href="#">View on Github</a>
            </div>
          </div>
        </div>
        <div className="hero--image">
          <img src={viteLogoLarge} alt="vite-logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import { useState } from "react";
import viteLogoLarge from "./assets/logo-with-shadow.png";
import viteLogoBackground from "./assets/logo-background-image.png";
import Feature from "./Feature";
import "./Hero.css";

function Hero(props) {
  return (
    <div className={`hero ${props.darkMode ? "dark-hero" : ""}`}>
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
            <div className="btn btn-normal">
              {" "}
              <a href="#">Why Vite?</a>{" "}
            </div>
            <div className="btn btn-normal">
              {" "}
              <a href="#">View on Github</a>
            </div>
          </div>
        </div>
        <div className="hero--image background-image">
          <img
            className="hero--vite-logo"
            src={viteLogoLarge}
            alt="vite-logo"
          />
          <div className="hero-logo-gradient"></div>
        </div>
      </div>
      <div className="features-section"></div>
      <div className="features-container">
        <Feature
          icon={<i className="fas fa-angle-double-right"></i>}
          title="Instant Server Start"
          description="On demand file serving over native ESM, no bundling required!"
        />
        <Feature
          icon={<i className="fas fa-bolt"></i>}
          title="Lightning Fast HMR"
          description="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <Feature
          icon={<i className="fas fa-tools"></i>}
          title="Rich Features"
          description="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
        <Feature
          icon={<i className="fas fa-box-open"></i>}
          title="Optimized Build"
          description="Pre-configured Rollup build with multi-page and library mode support."
        />
        <Feature
          icon={<i className="fas fa-plug"></i>}
          title="Universal Plugins"
          description="Rollup-superset plugin interface shared between dev and build."
        />
        <Feature
          icon={<i className="fas fa-key"></i>}
          title="Fully Typed APIs"
          description="Flexible programmatic APIs with full TypeScript typing."
        />
      </div>
    </div>
  );
}

export default Hero;

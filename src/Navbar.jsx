import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./Navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar">
      <div className="navbar--logo-title-container">
        <img className="navbar--logo" src={viteLogo} alt="react-logo" />
        <p className="navbar--title">Vite</p>
      </div>
      <div className="navbar--search-box">
        <i className="fas fa-search"></i>
        <p className="search-title">Search</p>
        <div className="search-shortcut">⌘ K</div>
      </div>
      <div className="navbar--menu-items">
        <ul className="navbar--items">
          <li className="navbar--item">
            <a href="#">Guide</a>
          </li>
          <li className="navbar--item">
            <a href="#">Config</a>
          </li>
          <li className="navbar--item">
            <a href="#">Plugins</a>
          </li>
          <li className="navbar--item">
            <a href="#">
              Resources &#160;<i class="fas fa-angle-down"></i>
            </a>
          </li>
          <li className="navbar--item">
            <a href="#">
              Version &#160;<i class="fas fa-angle-down"></i>
            </a>
          </li>
        </ul>
        <span className="navbar--separator">|</span>
        <p className="navbar--language-selector">
          EN &#160;<i class="fas fa-angle-down"></i>
        </p>
        <span className="navbar--separator">|</span>
        <div className="toggler">
          {/* <p className="toggler--light">Light</p> */}
          <div className="toggler--slider">
            <div className="toggler--slider--circle">
              <i class="fas fa-adjust"></i>
            </div>
          </div>
          {/* <p className="toggler--dark">Dark</p> */}
        </div>
        <i className="social-media-icon fab fa-twitter"></i>
        <i className="social-media-icon fab fa-discord"></i>
        <i className="social-media-icon fab fa-github"></i>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [count, setCount] = useState(0);
  return (
    <div className="footer">
      <div className="footer--container">
        <p className="footer--license">
          Released under the MIT License. (55b97113)
        </p>
        <p className="footer--copyright">
          Copyright © 2019-present Evan You & Vite Contributors
        </p>
      </div>
    </div>
  );
}

export default Footer;

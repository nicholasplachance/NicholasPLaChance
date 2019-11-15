import React from "react";
import "../Style.css";

function Navigation() {

  return (
    <nav>
      <span
        id="hamburger-icon"
        className="fas fa-hamburger is-hidden--desktop"
      >=</span>
      <ul className="is-hidden--mobile show-on--desktop">
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./about/">About</a>
        </li>
        <li>
          <a href="./contact/">Contact</a>
        </li>
        <li>
          <a href="./blog/">Blog</a>
        </li>
        <li>
          <a href="./gallery/">Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

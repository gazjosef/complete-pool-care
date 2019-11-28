import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Complete</span> Pool Services
          </h1>
        </div>
        <nav>
          <ul>
            <li className="current">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

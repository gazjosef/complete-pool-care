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
              <h4>Home</h4>
            </li>
            <li>
              <h4>About</h4>
            </li>
            <li>
              <h4>Services</h4>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

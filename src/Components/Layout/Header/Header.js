import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">Complete Pool Care</div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <div className="nav-link">Home</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">About</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Services</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Blog</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

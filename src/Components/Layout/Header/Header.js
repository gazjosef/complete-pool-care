import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
            <li className="nav-item nav-link active">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li className="nav-item nav-link dropdown">
              {/* <Link to="/services" style={{ textDecoration: "none" }}>
                Services
              </Link> */}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Services
              </a>
              <div className="dropdown-menu">
                <a href="profile.html" className="dropdown-item">
                  <i className="fas fa-hammer"></i> Pump Repair
                </a>
                <a href="settings.html" className="dropdown-item">
                  <i className="fas fa-square"></i> Pool Covers
                </a>
                <a href="settings.html" className="dropdown-item">
                  <i className="fas fa-tools"></i> Pool Maintenance
                </a>
                <a href="settings.html" className="dropdown-item">
                  <i className="fas fa-lightbulb"></i> Pool Lights
                </a>
                <a href="settings.html" className="dropdown-item">
                  <i className="fas fa-eye-dropper"></i> Salt Water Pool
                  Chlorinator
                </a>
              </div>
            </li>
            <li className="nav-item nav-link">
              <Link to="/shop" style={{ textDecoration: "none" }}>
                Shop
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

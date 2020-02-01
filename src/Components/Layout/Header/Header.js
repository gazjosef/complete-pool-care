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
            <li className="nav-item nav-link">
              <Link to="/services" style={{ textDecoration: "none" }}>
                Services
              </Link>
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

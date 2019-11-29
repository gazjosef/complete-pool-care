import React from "react";
import "./header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a href="index.html" class="navbar-brand">
          Complete Pool Care
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="index.html" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="services.html" class="nav-link">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a href="blog.html" class="nav-link">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

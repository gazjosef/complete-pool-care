import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="main-footer" className="text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Copyright &copy; <span id="year"></span> Complete Pool Care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

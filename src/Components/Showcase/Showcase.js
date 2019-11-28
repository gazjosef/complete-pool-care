import React from "react";
import "./showcase.css";

function Showcase() {
  return (
    <div>
      <section id="showcase">
        <div className="container">
          <h1>Affordable Pool Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            tempore, distinctio adipisci magnam enim ea quae quos nobis eum
            veniam minus, culpa rerum aperiam blanditiis architecto, temporibus
            alias. Eligendi, illo.Cumque optio iure itaque consequuntur? Earum
            modi, aliquam eveniet labore exercitationem dolorum. Cum harum
            debitis illum voluptatum deserunt, quas nostrum excepturi, ratione
            quaerat eaque aliquam eos. Alias minima nam provident.
          </p>
        </div>
      </section>
      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our newsletter</h1>
          <form action="">
            <input type="email" placeholder="Enter Email..." />
            <button type="submit" className="button_1">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Showcase;

import React from "react";
import "./services.css";

function Services() {
  return (
    <section id="main">
      <div className="container">
        <article id="main-col">
          <h1 className="page-title">Services</h1>
          <ul id="services">
            <li>
              <h3>Website Design</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                eos aliquid mollitia laboriosam dignissimos hic eveniet
                quibusdam odio adipisci sunt, repudiandae, ipsa animi,
                asperiores fugiat sequi in modi. Tempore, ut.
              </p>
              <p>Price: $$$$</p>
            </li>
            <li>
              <h3>Website Maintenance</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                eos aliquid mollitia laboriosam dignissimos hic eveniet
                quibusdam odio adipisci sunt, repudiandae, ipsa animi,
                asperiores fugiat sequi in modi. Tempore, ut.
              </p>
              <p>Price: $$$$</p>
            </li>
            <li>
              <h3>Website Hosting</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                eos aliquid mollitia laboriosam dignissimos hic eveniet
                quibusdam odio adipisci sunt, repudiandae, ipsa animi,
                asperiores fugiat sequi in modi. Tempore, ut.
              </p>
              <p>Price: $$$$</p>
            </li>
          </ul>
        </article>
        <aside id="sidebar">
          <div className="dark">
            <h3>Get A Quote</h3>
            <form action="" className="quote">
              <div>
                <label htmlFor="">Name</label>
                <br />
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <br />
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <br />
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="button_1" type="submit">
                Send
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Services;

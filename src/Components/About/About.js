import React from "react";
import "./about.css";

function About() {
  return (
    <section id="main">
      <div className="container">
        <article id="main-col">
          <h1 className="page-title">About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            voluptatum repellat numquam debitis, itaque aliquam voluptates
            voluptas iste recusandae tenetur doloremque quis, placeat eveniet,
            quisquam rem corrupti? Atque, earum fugiat.
          </p>
          <p className="dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            placeat iusto ullam excepturi repellat quod beatae et, recusandae
            eaque culpa eveniet porro, facilis suscipit odio officia consectetur
            fuga perspiciatis quasi.
          </p>
        </article>
        <aside id="sidebar">
          <div className="dark">
            <h3>What we do</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              assumenda mollitia, at maiores quas beatae minima facilis! Id
              laboriosam rerum earum possimus fuga. Vel iure neque eligendi odio
              nam quo.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;

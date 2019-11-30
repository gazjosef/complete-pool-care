import React from "react";
import "./video.css";

const Video = () => {
  return (
    <section id="video-play">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container p-5">
              <h3
                className="video"
                data-video="https://www.youtube.com/embed/HnwsG9a5riA"
                data-toggle="modal"
                data-target="#videoModal"
              >
                <i className="fas fa-play fa-3x"></i>
              </h3>
              <h1>See What We Do</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

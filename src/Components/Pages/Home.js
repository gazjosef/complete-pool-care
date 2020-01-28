import React from "react";

// Layout
import Showcase from "../Layout/Showcase/Showcase";
import HomeIcons from "../Layout/HomeIcons/HomeIcons";
import Video from "../Layout/Video/Video";
import Gallery from "../Layout/Gallery/Gallery";

const Home = () => {
  return (
    <div className="container">
      <Showcase />
      <HomeIcons />
      <Video />
      <Gallery />
    </div>
  );
};

export default Home;

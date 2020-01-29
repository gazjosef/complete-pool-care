import React, { Fragment } from "react";

// Layout
import Showcase from "../Layout/Showcase/Showcase";
import HomeIcons from "../Layout/HomeIcons/HomeIcons";
import Video from "../Layout/Video/Video";
import Gallery from "../Layout/Gallery/Gallery";

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <HomeIcons />
      <Video />
      <Gallery />
    </Fragment>
  );
};

export default Home;

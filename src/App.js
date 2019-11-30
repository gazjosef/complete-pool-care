import React from "react";
import "./App.css";

// LAYOUT
import Header from "./Components/Layout/Header/Header";
import Showcase from "./Components/Layout/Showcase/Showcase";
import HomeIcons from "./Components/Layout/HomeIcons/HomeIcons";
import Video from "./Components/Layout/Video/Video";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <HomeIcons />
      <Video />
      <Footer />
    </div>
  );
}

export default App;

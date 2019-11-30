import React from "react";
import "./App.css";

// LAYOUT
import Header from "./Components/Layout/Header/Header";
// import Showcase from "./Components/Showcase/Showcase";
import Showcase2 from "./Components/Layout/Showcase/Showcase";
import HomeIcons from "./Components/Layout/HomeIcons/HomeIcons";
import Video from "./Components/Layout/Video/Video";
import Footer from "./Components/Footer/Footer";

// PAGES
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase2 />
      <HomeIcons />
      <Video />
      {/* <Showcase /> */}
      {/* <About /> */}
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

export default App;

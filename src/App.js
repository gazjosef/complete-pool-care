import React from "react";
import "./App.css";

// LAYOUT
import Header from "./Components/Layout/Header/Header";
import Showcase from "./Components/Showcase/Showcase";
import Showcase2 from "./Components/Layout/Showcase/Showcase";
import Boxes from "./Components/Boxes/Boxes";
import Footer from "./Components/Footer/Footer";

// PAGES
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase2 />
      {/* <Showcase /> */}
      <Boxes />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

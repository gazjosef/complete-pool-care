import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Showcase from "./Components/Showcase/Showcase";
import Boxes from "./Components/Boxes/Boxes";

import About from "./Components/About/About";
import Services from "./Components/Services/Services";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Boxes />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

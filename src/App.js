import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// LAYOUT
import Header from "./Components/Layout/Header/Header";
import Showcase from "./Components/Layout/Showcase/Showcase";
import HomeIcons from "./Components/Layout/HomeIcons/HomeIcons";
import Video from "./Components/Layout/Video/Video";
import Gallery from "./Components/Layout/Gallery/Gallery";
import Footer from "./Components/Layout/Footer/Footer";

// PAGES
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Showcase />
        <HomeIcons />
        <Video />
        <Gallery />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          {/* <Route component={NotFound} /> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

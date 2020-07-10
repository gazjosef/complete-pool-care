import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// LAYOUT
import { Header } from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';

// PAGES
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Shop from './Components/Pages/Shop';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route component={NotFound} /> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

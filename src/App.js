import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import '../node_modules/bootstrap/js/dist/carousel.js';
// import '../node_modules/bootstrap/js/dist/dropdown.js';
import undraw from './undraw_under_construction_46pa.svg'
import './App.css';
import NavBar from './component/Navbar';
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';
import GetStarted from './component/GetStarted';
import Default from './component/Default';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/get-started" component={GetStarted} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

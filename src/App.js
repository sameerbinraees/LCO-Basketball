import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Tournamnet from './Tournament'
import Video from './Video'
import Faq from './Faq'
import Team from './Team'
import About from './About'
import Contact from './Contact'

import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {

  return (

    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/LCO-Basketball/#/" exact component={Home} />
          <Route path="/LCO-Basketball/#/tournament" exact component={Tournamnet} />
          <Route path="/LCO-Basketball/#/video" exact component={Video} />
          <Route path="/LCO-Basketball/#/faqs" exact component={Faq} />
          <Route path="/LCO-Basketball/#/team" exact component={Team} />
          <Route path="/LCO-Basketball/#/contact" exact component={Contact} />
          <Route path="/LCO-Basketball/#/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

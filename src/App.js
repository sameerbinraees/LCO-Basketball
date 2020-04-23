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
          <Route path="/" exact component={Home} />
          <Route path="/tournament" exact component={Tournamnet} />
          <Route path="/video" exact component={Video} />
          <Route path="/faqs" exact component={Faq} />
          <Route path="/team" exact component={Team} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

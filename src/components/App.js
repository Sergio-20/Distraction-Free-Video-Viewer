import React, { Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header.js';
import MusicPlayer from './MusicPlayer.js';

import About from "./About.js";


function App() {
  
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" render={ props => (
              <Fragment>
                <div id="bkg-container" style={{ position: "fixed", zIndex: -1, width: "100%", height: "100%", margin: "0 auto", }}>
                  <iframe className="music-player" frameBorder="0" height="100%" width="100%" 
                  src="https://youtube.com/embed/rh9PwFvMS0I?autoplay=1&controls=0&autohide=1&mute=1&modestbranding=1">
                  </iframe>
                </div>
                <Header />
                <MusicPlayer />
              </Fragment>
            )} /> 
            <Route exact path="/about" render={ props => (
              <Fragment>
                <Header />
                <About />
              </Fragment>
            )} />
            <Route exact path="/profile" render={ props => (
              <Fragment>
                <Header />
              </Fragment>
            )} />  
            <Route exact path="/login" render={ props => (
              <Fragment>
                <Header />
              </Fragment>
            )} />
          </Switch>
        </Router>    
      </main>
    );

}

export default App;
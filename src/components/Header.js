import React from 'react';

import  IdleTimer  from 'react-idle-timer';


export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)

    this.state = {
      showNav: false
    };
  }

  componentDidMount() {

    if ( window.matchMedia('(max-width: 510px)').matches ) {
      this.showNav();
    }

  }

  _onActive(e) {
    document.body.style.cursor = "default";
    document.querySelector( "#navbar" ).style.transition = "all 0.4s ease-in-out"; 
    document.querySelector( "#navbar" ).style.visibility = "visible";
    document.querySelector( "#navbar" ).style.opacity = "1";
  }

  _onIdle(e) {
    document.body.style.cursor = "none";
    document.querySelector( "#navbar" ).style.transition = "all 0.4s ease-in-out"; 
    document.querySelector( "#navbar" ).style.visibility = "hidden";
    document.querySelector( "#navbar" ).style.opacity = "0";
  }

  showNav = () => {

    if( this.state.showNav === true )
    {
        document.querySelector( "#navlinks" ).style.transition = "all 0.4s ease-in-out";
        document.querySelector( "#nav-login" ).style.transition = "all 0.4s ease-in-out";
        document.querySelector( "#navlinks" ).style.visibility = "visible";
        document.querySelector( "#nav-login" ).style.visibility = "visible";
        document.querySelector( "#navlinks" ).style.opacity = "1";
        document.querySelector( "#nav-login" ).style.opacity = "1";
        document.querySelector( "#navlinks" ).style.height = "inherit";
        document.querySelector( "#nav-login" ).style.height = "inherit";
        document.querySelector( "#navbar" ).style.height = "inherit";
        
        if( document.querySelector( "div#bkg-container" ) !== null )
        {
          document.querySelector( "div#bkg-container" ).style.top = "34rem";
        }
    }

    else
    {
        document.querySelector( "#navlinks" ).style.transition = "all 0.4s ease-in-out";
        document.querySelector( "#nav-login" ).style.transition = "all 0.4s ease-in-out";
        document.querySelector( "#navlinks" ).style.visibility = "hidden";
        document.querySelector( "#nav-login" ).style.visibility = "hidden";
        document.querySelector( "#navlinks" ).style.opacity = "0";
        document.querySelector( "#nav-login" ).style.opacity = "0";
        document.querySelector( "#navlinks" ).style.height = "0px";
        document.querySelector( "#nav-login" ).style.height = "0px";
        document.querySelector( "#navbar" ).style.height = "60px";
        
        if( document.querySelector( "div#bkg-container" ) !== null )
        {
          document.querySelector( "div#bkg-container" ).style.top = "260px";
        }
    }

    this.setState( prevState => ({
      showNav: !prevState.showNav
    }));

  }
    
  render() {

    return(

      <IdleTimer ref={ref => { this.idleTimer = ref }} element={document} onIdle={ this.onIdle } onActive={ this.onActive } debounce={ 250 } timeout={ 2500 }>
       <header id="navbar">
        <ul className="menu-icon"><li onClick={ this.showNav }><i className="fa fa-bars" aria-hidden="true"></i></li></ul> 
        <ul id="navlinks">
         <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/profile">Your Profile</a></li>
        </ul>
        <ul id="nav-login">
         <li><a href="/login">Login/Sign Up</a></li>   
        </ul>  
       </header>
      </IdleTimer>

    );

  }

}
import React from "react";

export default class About extends React.Component {

  componentDidMount() {
      document.querySelector( "body" ).style.backgroundColor = "#fff";
      document.querySelector( "#navbar" ).style.background = "#f78c1f";
  }  
 
  render() {
    return(
        <section class="margin-center" style={{ padding: "2rem", width: "880px", maxWidth: "100%" }}>
          <h1 style={{ fontSize: "3rem" }}>About</h1>
          <figure style={{ marginBottom: "4rem" }}>
            <img class="res-img" src="https://images.pexels.com/photos/34407/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="A person using Youtube on their phone." />
            <figcaption>Browse Youtube and enjoy listening and watching your favorite videos and livestreams!</figcaption>  
          </figure>
          <p>Use this app to browse videos from Youtube and/or listen to music from Youtube as well. 
            It can be used from your phone, tablet or pc. What's great is that you can also watch livestreams too!</p>
          <p style={{ marginBottom: "2rem" }}>
            As the creator of the app, I wish that you would please enjoy using it. Many thanks if you decide to share it with your friends as well!  
          </p>
    
          <h2 style={{ fontSize: "2.5rem" }}>So Why Use This App Anyway?</h2>  
    
          <p>Great question!</p>
    
          <p>The whole purpose for building this app was to help users browse youtube distraction free from suggested videos, 
             comments and whatever else may come your way from the Youtube algorithm.
          </p>
    
          <p>
            What's great, is that with creation of a <a href="/login">free account</a> you will be able to save your favorite music videos and come listen to them distraction free. 
            Or, if that's not your thing, you can save your favorite videos and come back to watch them without any annoying Youtube recommendations or comments.
          </p>
    
        </section>
      );
  }

}
import React from 'react';
import  IdleTimer  from 'react-idle-timer';


export default class MusicPlayer extends React.Component {

    constructor( props ) {
      super( props )
      this.idleTimer = null
      this.onActive = this._onActive.bind( this )
      this.onIdle = this._onIdle.bind( this )
    }

    _onActive(e) {
      document.body.style.cursor = "default";
      document.querySelector( ".mp-container" ).style.transition = "all 0.4s ease-in-out"; 
      document.querySelector( ".mp-container" ).style.visibility = "visible";
      document.querySelector( ".mp-container" ).style.opacity = "1";
    }

    _onIdle(e) {
      document.body.style.cursor = "none";
      document.querySelector( ".mp-container" ).style.transition = "all 0.4s ease-in-out"; 
      document.querySelector( ".mp-container" ).style.visibility = "hidden";
      document.querySelector( ".mp-container" ).style.opacity = "0";
    }

    render() {

        return(
            <section className="mp-container">
                
                <IdleTimer ref={ref => { this.idleTimer = ref }} element={document} onIdle={ this.onIdle } onActive={ this.onActive } debounce={ 250 } timeout={ 2500 }>
                
                    <aside className="mp-controls">
     
                    <input className="search" type="search" placeholder="Search youtube videos..." />  
       
                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>
       
                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>

                    <figure className="fav-item">
                      <img src="" alt="" />
                      <figcaption class="fav-title"></figcaption>  
                    </figure>
       
                  </aside>
                  
               </IdleTimer> 
                
            </section> 
         );

    }

}
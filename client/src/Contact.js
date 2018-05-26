import React, { Component } from "react";
import ReactContactForm from 'react-mail-form';

class Contact extends Component {


    render() {
        return (
            <div className="App">
            <div id="mainContainer">
              <div id="mainContentBlock">
                <div id="mainContent" class="contact">
               <div id="contact-form"><ReactContactForm to="eesh.tyagi@gmail.com" /></div>
                
                </div>
              </div>
    
              <footer>
                <div className="footer">
                
                  <div class="header__inner">
                  
                    <ul class="header__nav nav ">
                      
                      <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
                      
                    </ul>
    
                    
                  </div>
                  <p>© Eesh.</p>
                </div>
              </footer>
            </div>
          </div>
        
    )
    }


}

export default Contact;
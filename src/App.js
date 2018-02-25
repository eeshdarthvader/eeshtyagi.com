import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {portfolioCardComponent} from './portfolioCardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="mainContainer">
        <div id="mainContentBlock">
          <div id="mainContent">
            <div id="avatarImageBlock">
            </div>
            <div id="introBox">
              <h1>Eesh</h1>
              <h2>Web developer</h2>
              <ul id="linkBox">
                <li className>
                  <a href="https://medium.com/@eesh.t" title="Medium">
                    <i className="fa fa-medium fa-fw link-icon" /><span className="description">Medium</span>
                  </a>
                </li>
                <li className>
                  <a href="https://www.linkedin.com/in/eesh-tyagi-4905a824/" title="Linkedin">
                    <i className="fa fa-linkedin fa-fw link-icon" /><span className="description">Linkedin</span>
                  </a>
                </li>
                <li className>
                  <a href="https://github.com/eeshdarthvader" title="GitHub">
                    <i className="fa fa-github fa-fw link-icon" /><span className="description">GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="fullBioBox">
              <p >Takes care of UI UX of different products and innovating usage of upcoming front end technologies.</p>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <p>© Eesh.
            </p>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;

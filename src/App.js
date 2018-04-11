import React, {Component} from 'react';
import axios from 'axios';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    blog: '',
  };
  // BlogPost.js
  componentDidMount() {
    axios
      .get(`https://medium.com/@eesh.t/latest`, {Accept: 'application / json'})
      //.then(response => this.setState({blog: response.data}))
      .then(res => {
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="App">
        <div id="mainContainer">
          <div id="mainContentBlock">
            <div id="mainContent">
              <div id="avatarImageBlock" />
              <div id="introBox">
                <h1>Eesh Tyagi</h1>
                <h3>Web developer</h3>
                <ul id="linkBox">
                  <li className>
                    <a href="https://medium.com/@eesh.t" title="Medium">
                      <i className="fa fa-medium fa-fw link-icon" />
                      <span className="description">Medium</span>
                    </a>
                  </li>
                  <li className>
                    <a
                      href="https://www.linkedin.com/in/eesh-tyagi-4905a824/"
                      title="Linkedin"
                    >
                      <i className="fa fa-linkedin fa-fw link-icon" />
                      <span className="description">Linkedin</span>
                    </a>
                  </li>
                  <li className>
                    <a href="https://github.com/eeshdarthvader" title="GitHub">
                      <i className="fa fa-github fa-fw link-icon" />
                      <span className="description">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="fullBioBox">
                <p>
                  Takes care of UI UX of different products and innovating usage
                  of upcoming front end technologies.
                </p>
              </div>
              <div id="mediumBlog">
                <div id="blogCard">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button outline color="success" size="sm">
                        Go to post
                      </Button>
                    </CardBody>
                  </Card>
                </div>
                <div id="blogCard">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button outline color="success" size="sm">
                        Go to post
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div className="footer">
              <p>© Eesh.</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;

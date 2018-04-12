import React, { Component } from "react";
// import axios from 'axios';

import logo from "./logo.svg";
import "./App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class App extends Component {
  state = {
    blog: ""
  };

  // BlogPost
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ blog: res.payload.references.Post }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/medium");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  renderBlogs = () => {
    const { blog } = this.state;

    return Object.keys(blog).map(function(key) {
      const previewImage = blog[key].virtuals.previewImage;
      const postTitle = blog[key].title;
      const postBrief = blog[key].content.subtitle;
      const postslug = blog[key].slug;

      const imageDomain = "https://cdn-images-1.medium.com/max";
      return (
        <div id="blogCard" key={key}>
          <Card>
            <CardImg
              top
              width="100%"
              src={`${imageDomain}/${previewImage.originalWidth}/${
                previewImage.imageId
              }`}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{postTitle}</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>{postBrief}</CardText>
              <Button outline color="success" size="sm">
                <a href={`https://medium.com/@eesh.t/${postslug}`}>
                  {" "}
                  Go to post
                </a>
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

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
              <div id="mediumBlog">{this.renderBlogs()}</div>
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

import React, { Component } from 'react'

import './hero.css'

export default class hero extends Component {
  render() {
    return (
      <div>
        <h3 className="fw-100 description">
          Hi, I am Eesh. I’m a full-stack web developer in Munich, DE.
          <h3 className="fw-100 mt-2">
            I’ve been building interfaces for over 7 years. I’m currently in
            @scalable capital. I’m passionate about javascript, web performance,
            interfaces and delightful interactions. Lately been focusing on
            design systems.
          </h3>
        </h3>

        <h4 className="mt-8 f-20">Recent talks</h4>
        <div class="row cards ">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/-WBdSlndJXA?start=18"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <h3 className="mt-4 f-20">Recent blogs</h3>

        <div class="row cards mb-2">
          <a
            target="_blank"
            href="https://medium.com/@eesh.t/nginx-caching-for-nextjs-app-d42430e4e82"
          >
            <div class="col-4 card">
              <span class="card-meta">Web performance</span>
              <span class="card-title">NGINX Caching for nextjs app</span>
              <p class="card-desc">NGINX as a cache server for nextjs</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://medium.com/@eesh.t/send-email-using-emailjs-and-react-form-9993bb6929d8"
          >
            <div class="col-4 card">
              <span class="card-meta">React</span>
              <span class="card-title">Send Email using EmailJS</span>
              <p class="card-desc">
                ContactUs form using React.js and third-party service EmailJS.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            ref="https://medium.com/@eesh.t/import-module-aliasing-using-babel-plugin-module-resolver-in-nextjs-beef365fbb2c"
          >
            <div class="col-4 card">
              <span class="card-meta">js tooling</span>
              <span class="card-title">Import module aliasing in NextJs</span>
              <p class="card-desc">
                Babel plugin for doing custom module resolving in Next JS.
              </p>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

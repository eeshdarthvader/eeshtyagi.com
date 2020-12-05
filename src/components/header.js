import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ siteTitle }) => (
  <div className="headerContainer ">
    <div className="headerSubContainer">
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div className="navigationContainer">
            <ul className="navigations menu">
              <li>
                <a className="c-grey fw-600 mr-5 f-20" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="c-grey fw-600 mr-5 f-20"
                  href="https://twitter.com/EtEesh"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="c-grey fw-600 mr-5 f-20"
                  href="https://www.linkedin.com/in/eesh-tyagi-4905a824/"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="c-grey fw-600 mr-5 f-20"
                  href="https://github.com/eeshdarthvader"
                  target="_blank" rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="desktop">
                <Link className="c-grey fw-600 mr-5 f-20" to="/contactme">
                  Contact Me
                </Link>
              </li>
              <li className="mobile">
                <a className="c-grey fw-600 mr-5 f-20" href="#">
                  Resume
                </a>
              </li>
            </ul>
            <ul className="resume desktop">
              <li>
                <a className="c-grey fw-600 f-20" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

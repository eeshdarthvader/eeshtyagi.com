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
            <ul className="navigations">
              <li>
                <a className="c-grey mr-4" href="https://twitter.com/EtEesh">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="c-grey mr-4"
                  href="https://www.linkedin.com/in/eesh-tyagi-4905a824/"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="c-grey mr-4"
                  href="https://github.com/eeshdarthvader"
                >
                  Github
                </a>
              </li>
            </ul>
            <ul className="resume">
              <li>
                <a className="c-grey" href="#">
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

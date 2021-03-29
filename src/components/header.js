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
                <h1 class="logo-title">
                  <a
                    aria-current="page"
                    className="c-grey fw-600 mr-5 f-20"
                    href="/"
                  >
                    Eesh Tyagi
                  </a>
                </h1>
                <span className="logo-caption">Frontend dev</span>
              </li>
            </ul>
            <ul className="resume">
              <li>
                <a className="c-grey fw-600 f-20" href="#">
                  About
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

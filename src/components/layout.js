import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Popup from 'reactjs-popup'
import BurgerIcon from './burgerIcon'
import Header from './header'
import './layout.css'

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle="" />
        <div className="layoutContainer">{children}</div>
        <Popup
          modal
          overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          <div className="">
            <ul className="menu">
              <li>
                <a
                  className="c-grey mr-3 f-20"
                  href="https://twitter.com/EtEesh"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="c-grey mr-3 f-20"
                  href="https://www.linkedin.com/in/eesh-tyagi-4905a824/"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="c-grey mr-3 f-20"
                  href="https://github.com/eeshdarthvader"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="c-grey mr-3 f-20"
                  href="mailto:eesh.tyagi@gmail.com"
                >
                  Email
                </a>
              </li>
              <li>
                <a className="c-grey mr-3 f-20" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </Popup>

        <footer>
          <div className="footerContainer">
            <ul>
              <li>© {new Date().getFullYear()}, Eesh</li>
            </ul>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import faviconBulma from '../assets/img/faviconBulma.png'

import React, { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import NshortJS from './N/NshortJS'
import Nreact from './N/Nreact'

function Nav() {
  useEffect(() => {
    $$.bulmaMenu('#burger', '#nav-links')
    // $$.ocL(link0.current, 'active', 'add')
    // $$.qAe_ocL_T('nav .navbar-end a', '#selTrgt')
  }, [])

  const pageLoading = () => {
    $$.qcL_T('#selTrgt')
  }

  return (
    <>
      <nav
        className="navbar is-primary has-text-grey-light has-text-weight-medium is-radiusless pb-2"
        role="navigation"
        aria-label="Main navigation"
        id="nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              exact
              to="/"
              id="top"
              className="navbar-item has-tooltip-bottom mt-2 mr-5 pb-3"
              data-tooltip="Top page"
            >
              BulmaProject
            </NavLink>
            <div id="burger" className="navbar-burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className="navbar-menu is-primary mr-3"
            style={{ position: 'absolute', right: '5px' }}
            id="nav-links"
          >
            <div className="navbar-start navbar-item">
              <a
                href="https://bulma.io/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className="button navbar-item is-primary is-fullwidth has-tooltip-bottom mt-1"
                data-tooltip="Bulmaドキュメントへ"
              >
                <span className="icon">
                  {/* // src="./assets/img/bulma32.ico" */}
                  <img src={faviconBulma} title="Bulma home!" alt="bulma" />
                </span>
                <span>Bulma</span>
              </a>
            </div>
            <div className="navbar-end has-text-dark px-4">
              <NavLink
                to="/NshortJS"
                className="navbar-item"
                onClick={pageLoading}
              >
                shortJS.js
              </NavLink>
              <NavLink
                to="/Nreact"
                className="navbar-item"
                onClick={pageLoading}
              >
                React
              </NavLink>
              <NavLink
                to="/About"
                className="navbar-item"
                onClick={pageLoading}
              >
                About
              </NavLink>
            </div>
            {/* bulma-pageloader/ in bulma-extensions.min.css */}
            <div id="selTrgt" className="pageloader" style={{ opacity: 0.4 }}>
              <span className="title has-text-black has-text-weight-bold is-size-5">
                ナビゲーティング ...
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav

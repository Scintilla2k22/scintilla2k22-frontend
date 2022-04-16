import React, { useState } from "react";
import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import SideNav from "./SideNav";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav ">
      {!showNav ? (
        <div className="navbar">
          <div className="nav-left">
            {/* <h3>BTKIT Dwarahat</h3> */}
          </div>

          <div className="nav-right">
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  className="nav-link"
                  to="#about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  className="nav-link"
                  to="/events"
                >
                  Events
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  className="nav-link"
                  to="/"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div onClick={() => setShowNav(!showNav)} className="hamburger">
            <GiHamburgerMenu />
          </div>
        </div>
      ) : (
        <>
          
          <SideNav setShowNav = { setShowNav} state = {showNav} />
        </>
      )}
    </div>
  );
}

export default NavBar;

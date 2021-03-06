import React, { useState } from "react";
import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import SideNav from "./SideNav";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const navActiveLink = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(255, 0, 89)' : 'white',
      transform: isActive ? 'translateY(4px)' : 'translateY(0px)'
    }
  }

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
                <NavLink style={navActiveLink}
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <HashLink
                  className="nav-link"
                  to="/#about"
                >
                  About
                </HashLink>
              </li>

              <li className="nav-item">
                <NavLink style={navActiveLink}
                  className="nav-link"
                  to="/events"
                >
                  Events
                </NavLink>
              </li>

              <li className="nav-item">
                <HashLink
                  className="nav-link"
                  to="/#contact_"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          <div onClick={() => setShowNav(!showNav)} className="hamburger">
            <GiHamburgerMenu />
          </div>
        </div>
      ) : (
        <>

          <SideNav setShowNav={setShowNav} state={showNav} />
        </>
      )}
    </div>
  );
}

export default NavBar;

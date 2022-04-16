import React from 'react'

import './style.scss'

import './sidenav.css'
import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom"

function SideNav(props) {
    const{
        setShowNav,
        state
    }  = props;

    const handleClick =  () => {
        setShowNav(!state)
    }
    return (
        <div className="mobile-nav-right">
            <div onClick={ () =>  handleClick()}  className="hamburger">
            <AiOutlineClose />
          </div>
            <ul className='mobile-nav-items'>
                <li className="nav-item">
                    <NavLink activeClassName="is-active" className="nav-link" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink activeClassName="is-active" className="nav-link" to="#about">
                        About
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink activeClassName="is-active" className="nav-link" to="/events">
                        Events
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink activeClassName="is-active" className="nav-link" to="/">
                        Contact
                    </NavLink>
                </li>
            </ul>

        </div >


    )
}

export default SideNav






{/* <div>
<span style={{ fontSize: '30px', cursor: 'pointer' }} onclick="openNav()">&#9776; open</span>
<div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
</div>

<p>
    lorem2000
</p>

</div> */}
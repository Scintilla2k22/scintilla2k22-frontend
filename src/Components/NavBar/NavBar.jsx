import React from 'react'
import './style.scss'
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="nav-left">
                    <h3>BTKIT Dwarahat</h3>
                </div>

                <div className="nav-right">

                    <AiOutlineAlignRight className='hamburger' />
                    <ul className='nav-items'>
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


            </div >
        </div >
    )
}

export default NavBar
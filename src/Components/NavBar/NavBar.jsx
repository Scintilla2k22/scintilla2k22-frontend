import React from 'react'
import './style.scss'

import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="nav">
            <div className="navbar">
                <div className="nav-left">
                    <h3>ScinTilla 2K22</h3>
                </div>

                <div className="nav-right">
                    <ul className='nav-items'>
                        <NavLink className="" to="/"><li className="nav-item">Home</li></NavLink>

                        <li className="nav-item">About</li>
                        <li className="nav-item">Events</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
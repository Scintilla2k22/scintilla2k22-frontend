import React from 'react'
import './header.css'
import Ipad from '../Arts/ipad'

function Header() {
    return (
        <div className='header'>
            <h1 style={{ textAlign: 'center' }} className='heading1'>Scintilla 2K22</h1>
            <Ipad />
        </div>
    )
}

export default Header
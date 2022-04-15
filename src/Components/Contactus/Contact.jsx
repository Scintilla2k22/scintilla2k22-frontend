import React from 'react';
import './contact.scss';
import Profile from './Profile';


function Contact() {
    return (
        <div className="contact">
            <h2 className='heading2'>Contact Us</h2>
            <div className="profiles">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </div>
        </div>
    )
}

export default Contact
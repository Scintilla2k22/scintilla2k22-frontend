import React from 'react';
import './contact.scss';
import Profile from './Profile';
import { coordinators } from '../../utils/coords';


function Contact() {
    return (
        <div className="contact" id = "contact_" >
            <h2 className='heading1'>Contact Us</h2>
            <div className="profiles">

                { coordinators && coordinators.map(dat => <Profile data = {dat} />)}
            </div>
        </div>
    )
}

export default Contact
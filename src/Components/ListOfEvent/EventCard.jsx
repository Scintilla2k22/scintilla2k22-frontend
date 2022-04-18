import React, { useState } from 'react';
import './ListOfEvent.css';
import { Link } from 'react-router-dom';


const loc = process.env.PUBLIC_URL;

function EventCasd() {
    const [showButton, setShowButton] = useState(false)

    return (

        <div onMouseOver={() => setShowButton(true)}
            onMouseOut={() => setShowButton(false)}
            className='event-card'>
            <img src={`${loc}/image/event.jpg`} alt="" />
            <div className="events-info">
                <div className="left-info">
                    <p className="month">sep</p>
                    <p className="date">18</p>
                </div>
                <div className="right-info">
                    <p className="event-name">Face Painting Event</p>
                    <p className="event-desc">Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
            {
                showButton && <Link to='/event/info'>
                    <button className='info-btn'>More Info</button>
                </Link>}
        </div>

    )
}

export default EventCasd


{/* </Link> */ }
import React from 'react';
import './eventNew.scss'
import { Link } from 'react-router-dom';

const loc = process.env.PUBLIC_URL

const EventCardNew = () => {
    return (
        <div className='event-card-new-container' >
            <div className="event-card-left">
                <img src={`${loc}/image/cardimg.jpg`} alt="imaheeeeee" />
            </div>
            <div className="event-card-right">
                <div className='card-right-info'>
                    <h3 className='heading2'>Dancing</h3>
                    <p>15-04-22</p>
                </div>
                <Link to='events/eventpage'>
                    <button>Event Info</button>
                </Link>
            </div>
        </div>
    );
}

export default EventCardNew;

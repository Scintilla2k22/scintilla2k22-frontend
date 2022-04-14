import React, {useContext} from 'react'
import './Eventpage.css'
import { getUpcommingEventList, getEndedEvents, getLiveEvents } from '../../context/action';
import { EventContext } from '../../context';

const loc = process.env.PUBLIC_URL

function EventPage() {

    const {state, eventContextDispatch} = useContext(EventContext);
    
    return (
        <div className='event-page'>
            <div className="event-info">
                <div className="left-info">
                    <img src={`${loc}/image/knowbuddy.png`} alt="event-banner" />
                </div>
                <div className="right-info">
                    <h1 style={{ color: 'black' }} className='heading1'>Name of Event</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, inventore ut? Vitae aperiam quis saepe tenetur. Repellendus ipsam explicabo voluptatibus!</p>
                    <span className='status'>Upcoming</span>
                </div>
            </div>
            <div className="contestent-info">

            </div>

        </div>
    )
}

export default EventPage
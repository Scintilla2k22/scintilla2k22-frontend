import React, { useContext } from 'react'
import ContestentInfo from './ContestentInfo'
import './Eventpage.css'
import { getUpcommingEventList, getEndedEvents, getLiveEvents } from '../../context/action';
import { EventContext } from '../../context';

const loc = process.env.PUBLIC_URL

function EventPage() {

    const { state, eventContextDispatch } = useContext(EventContext);

    return (
        <div className='event-page'>
            <div className="event-info m-container">
                <div className="left-info">
                    <img src={`${loc}/image/knowbuddy.png`} alt="event-banner" />
                </div>
                <div className="right-info">
                    <h1 className='heading1'>Name of Event</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, inventore ut? Vitae aperiam quis saepe tenetur. Repellendus ipsam explicabo voluptatibus!</p>
                    <span className='status'>Upcoming</span>
                </div>
            </div>

            <div className="con-info ">
                <h2 style={{ fontSize: '2.5rem', margin: '20px', textAlign: 'center' }} className='heading2'>Contestent Information</h2>
                <div className="con-list">
                    <ContestentInfo />
                    <ContestentInfo />
                    <ContestentInfo />
                    <ContestentInfo />
                    <ContestentInfo />
                </div>
            </div>

        </div>
    )
}

export default EventPage
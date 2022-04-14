import React from 'react'
import ContestentInfo from './ContestentInfo'
import './Eventpage.css'

const loc = process.env.PUBLIC_URL

function EventPage() {
    return (
        <div className='event-page'>
            <div className="event-info m-container">
                <div className="left-info">
                    <img src={`${loc}/image/knowbuddy.png`} alt="event-banner" />
                </div>
                <div className="right-info">
                    <h1 style={{ color: 'black' }} className='heading1'>Name of Event</h1>
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
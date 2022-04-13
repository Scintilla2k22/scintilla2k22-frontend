import React from 'react'
import './event.css'
import EventCard from './EventCard'

function EventSection() {
    return (
        <div className='event-list-container'>
            <h2 style={{ color: 'red' }} className='heading2' >Upcoming Events</h2>
            <div className='event-list'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

export default EventSection
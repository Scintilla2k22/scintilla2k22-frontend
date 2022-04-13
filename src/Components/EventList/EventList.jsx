import React from 'react'
import './event.css'
import EventCard from './EventCard'
import EventSection from './EventSection'

function EventList() {
    return (
        <div className='event'>
            <h1>Events</h1>
            <div className='event-type  m-container'>
                <EventSection />
                <EventSection />
                <EventSection />
            </div>
        </div >
    )
}

export default EventList
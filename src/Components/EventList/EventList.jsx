import React from 'react'
import './eventList.css'
import EventCard from './EventCard'

function EventList() {
    return (
        <div className='event-list'>
            <h1>Events</h1>
            <EventCard />
        </div>
    )
}

export default EventList
import React, {useState} from 'react'
import './event.css'
import EventCard from './EventCard'
import EventSection from './EventSection'

function EventList() {

    const [up_event , setUpEvent] = useState([])
    const [live_event , setLiveEvent] = useState([])
    const [ended_event , setEndedEvent] = useState([])


    return (
        <div className='event'>
            <h1>Events</h1>
            <div className='event-type  m-container'>
                <EventSection data = {up_event} />
                <EventSection data = {live_event} />
                <EventSection data ={ended_event} />
            </div>
        </div >
    )
}

export default EventList
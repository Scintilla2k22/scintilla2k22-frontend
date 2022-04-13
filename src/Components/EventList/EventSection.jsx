import React from 'react'
import './event.css'
import EventCard from './EventCard'

function EventSection(props) {

    const data = props.data || [];

    return (
        <div className='event-list-container'>
            <h2 style={{ color: 'red' }} className='heading2' >Upcoming Events</h2>
            <div className='event-list'>
                
                {  data.map((info, ind) =>  <EventCard data = {info} />
                ) }
                
            </div>
        </div>
    )
}

export default EventSection
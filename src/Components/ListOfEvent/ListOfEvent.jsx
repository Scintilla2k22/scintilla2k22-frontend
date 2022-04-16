import React from 'react'
import EventCard from './EventCard'
import './ListOfEvent.css';

function ListOfEvent() {
    return (
        <div className='events-list'>
            <EventCard />
        </div>
    )
}

export default ListOfEvent
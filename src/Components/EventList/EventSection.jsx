import React from 'react'
import './event.css'
import EventCard from './EventCard'

const color = {
    upcoming: 'red',
    live: 'green',
    ended: 'gray'
}

function EventSection(props) {

    const {
        data = null,
        title
    } = props;

    console.log("data - ", data)
    return (
        <div className='event-list-container'>
            <h2 style={{ color: color[title] }} className='heading2' >{title} Events</h2>
            <div className='event-list'>

                {data && data.map((info, ind) => <EventCard data={info} />
                )}

            </div>
        </div>
    )
}

export default EventSection
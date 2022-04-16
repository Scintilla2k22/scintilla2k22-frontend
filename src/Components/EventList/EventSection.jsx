import React from 'react'
import './event.scss'
import EventCard from './EventCard'

const color = {
    upcoming: 'var(--color_pink)',
    live: 'var(--color_pink)',
    ended: 'var(--color_pink)'
}

function EventSection(props) {

    const {
        data = null,
        title
    } = props;

    console.log("data - ", data)
    return (
        <div className='event-list-container '>
            <h2 style={{ color: color[title] }} className='heading2' >{title } Events</h2>
            <div className='event-list container'>

                {data && data.map((info, ind) => <EventCard data={info} />
                )}

            </div>
        </div>
    )
}

export default EventSection
import React from 'react'
import './events.css'
import EventList from '../EventList/EventList'

function Header() {
    return (
        <div className='events'>
            <EventList />
        </div>
    )
}

export default Header
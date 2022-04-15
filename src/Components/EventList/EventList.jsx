import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from '../../context'
import '../Home/HeadSection/headSection.scss'
import EventSection from './EventSection'
import './event.css'


function EventList() {

    const [up_event, setUpEvent] = useState([])
    const [live_event, setLiveEvent] = useState([])
    const [ended_event, setEndedEvent] = useState([])

    const { state: {
        upcomming_events,
        live_events,
        ended_events,
    }, eventContextDispatch } = useContext(EventContext);

    useEffect(() => {

        setUpEvent(upcomming_events)
        setLiveEvent(live_events)
        setEndedEvent(ended_events)

    }, [upcomming_events, live_events, ended_events]);


    return (
        <div className='event'>
            <h1>Events</h1>
            <div className='event-type  m-container'>
                {live_event.length > 0 && <EventSection data={live_event} title='live' />}
                {up_event.length > 0 && <EventSection data={up_event} title='upcoming' />}
                {ended_event.length > 0 && <EventSection data={ended_event} title='ended' />}
            </div>
        </div >
    )
}

export default EventList
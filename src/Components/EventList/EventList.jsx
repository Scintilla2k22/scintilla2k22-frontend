import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from '../../context'
import '../Home/HeadSection/headSection.scss'
import EventSection from './EventSection'
import './event.scss'
import Planet from '../Arts/planet'


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
        <div className='event-page-parent'>
             {   
                    [ 2, 3, ,3, 7].map( ind =>  <Planet  /> )
                     }
            <div className='event-page-head'>
                <div className='page-head-content'>
                    <h2 className='eventHead'> Events </h2>
                    {/* <p className='eventDesc' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates! Aut, est.
                     </p>
                    <p className='eventTime' > 20 April 2022 - 22 April 2022  At  <span className='specialText' > BTKIT DWARAT </span> </p> */}

                </div>
            </div>
            <div className='event-type'>
                {live_event.length > 0 && <EventSection data={live_event} title='live' />}
                {up_event.length > 0 && <EventSection data={up_event} title='upcoming' />}
                {ended_event.length > 0 && <EventSection data={ended_event} title='ended' />}
            </div>
                   

        </div >
    )
}

export default EventList
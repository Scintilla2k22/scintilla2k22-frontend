import React from 'react'
import Planet from '../Arts/planet'
import './eventNew.scss'
import EventsRow from './EventsRow'
import EventCarousel from '../events/LiveEvent/EventCarousel'

export default function EventRowSection() {
  return (
    <div className='container-fluid position-relative mt-5' >

      <div className='e-r-heading '>
        <h3 className='heading1'>
          Live Events
        </h3>
      </div>
      <EventsRow />
      <Planet />
    </div>
  )
}

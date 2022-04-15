import React from 'react'
import EventHead from '../Components/EventNew/EventHead'
import EventList from '../Components/EventNew/EventsList'

export default function Event()

{
  return (
    <div className=' container-fluid position-relative p-0 m-0' style={ { backgroundColor : "var(--tr_bg) "}} >
        <EventHead />
        <EventList />
    </div>
  )
}

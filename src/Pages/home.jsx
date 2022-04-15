import React from 'react'
import HeadSection from '../Components/Home/HeadSection/headSection'
import About from '../Components/Home/AboutSection/About'
import Memories from '../Components/Home/Memories/Memories'
import EventsRow from '../Components/EventList/EventsRow'
import EventRowSection from '../Components/EventList/EventRowSection'

export default function Home() {
  return (
    <div style={{ backgroundColor : "#010015" , overflow : "hidden"}}  >
        <HeadSection />
        <About />
        <Memories />
      <EventRowSection />
    </div>
  )
}

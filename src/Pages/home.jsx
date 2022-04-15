import React from 'react'
import HeadSection from '../Components/Home/HeadSection/headSection'
import About from '../Components/Home/AboutSection/About'
import Memories from '../Components/Home/Memories/Memories'
import EventsRow from '../Components/EventList/EventsRow'
import EventRowSection from '../Components/EventList/EventRowSection'
import NavBar from '../Components/NavBar/NavBar'
import Events from '../Components/Home/Events/Events'
export default function Home() {
  return (
    <div style={{ backgroundColor: "#010015", position: 're' }} >
      <NavBar />
      <HeadSection />
      <About />
      <Memories />
      <Events />
    </div>
  )
}

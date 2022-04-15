import React from 'react'
import HeadSection from '../Components/Home/HeadSection/headSection'
import About from '../Components/Home/AboutSection/About'
import Memories from '../Components/Home/Memories/Memories'
import EventsRow from '../Components/EventList/EventsRow'
import EventRowSection from '../Components/EventList/EventRowSection'
import NavBar from '../Components/NavBar/NavBar'
import Contact from '../Components/Contactus/Contact'

import Events from '../Components/Home/Events/Events'
import Footer from '../Components/Footer/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: "#010015" }} >
      {/* <NavBar /> */}
      <HeadSection />
      <About />
      <Memories />
      {/* <EventRowSection /> */}
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

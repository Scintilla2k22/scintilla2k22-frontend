import React from "react";
import EventCard from "../../EventList/EventCard";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../../../context";
import "./Events.scss";
import EventBox from "./EventBox";
import Planet from "../../Arts/planet";
import { Timeline } from "../../../utils/timeline";

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Events() {
  const [live_event, setLiveEvent] = useState([]);
  const [events, setEvents] = useState([]);

  const {
    state: { live_events, event_list },
    eventContextDispatch,
  } = useContext(EventContext);

  useEffect(() => {
    setLiveEvent(live_events);
    setEvents(event_list)
  }, [live_events, event_list]);



  return (
    <div className="container-fluid p-0 m-0 event-head-container ">
      {
          events.length > 0 && events.map(item =>  <EventBox data={item} /> )

      }
    </div>
  );
}

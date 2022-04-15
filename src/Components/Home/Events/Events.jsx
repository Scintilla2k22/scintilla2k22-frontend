import React from "react";
import EventCard from "../../EventList/EventCard";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../../../context";
import "./Events.scss";
import EventBox from "./EventBox";
import Planet from "../../Arts/planet";
import { Timeline } from "../../../utils/timeline";

export default function Events() {
  const [live_event, setLiveEvent] = useState([]);
  const {
    state: { live_events },
    eventContextDispatch,
  } = useContext(EventContext);

  useEffect(() => {
    setLiveEvent(live_events);
  }, [live_events]);

  return (
    <div className="container-fluid p-0 m-0 event-head-container ">
      {
          Timeline && Timeline.map(item =>  <EventBox data={item} /> )

        }
    </div>
  );
}

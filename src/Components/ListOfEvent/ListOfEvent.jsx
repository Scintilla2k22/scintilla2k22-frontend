import React, { useEffect, useState, useContext } from "react";
import EventCard from "./EventCard";
import "./ListOfEvent.scss";
import { EventContext } from "../../context";
import EventMobileCard from "./EventMobileCard";
import EventDesktopCard from "./EventDesktopCard";
import MemoriesCarousel from "./MemoriesCarousel";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ListOfEvent() {
  const [up_event, setUpEvent] = useState([]);
  const [live_event, setLiveEvent] = useState([]);
  const [ended_event, setEndedEvent] = useState([]);

  const {
    state: { upcomming_events, live_events, ended_events },
    eventContextDispatch,
  } = useContext(EventContext);

    const [img_index, setIndex] = useState(1);
  useEffect(() => {
    setUpEvent(upcomming_events);
    setLiveEvent(live_events);
    setEndedEvent(ended_events);
  }, [upcomming_events, live_events, ended_events]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect( () => {

    console.log("hello buddy")
    const intervalId =  setInterval( () => {
      setIndex((img_index + 1)%5)
    }, 7000);
    return () => clearInterval(intervalId);
  }, [] )


  return (
    <div className="events-list">
     <div
           style={{
            background: `url('${process.env.PUBLIC_URL}/memories/img${img_index}.webp') no-repeat center center/cover`,
          }}
        className="event-header"
      >  
        <div className="left-header"></div>
        <div className="right-header">
          <h1>FOllow The Events</h1>
          <p>
            Start from <span>22 April</span> 2k22
          </p>
        </div> 

        {/* <MemoriesCarousel /> */}

      </div>

 { live_event.length > 0 ? <div className="event-slider">
        <h1>Live Events</h1>
        {windowDimensions.width > 800 ? (
          <EventDesktopCard data={live_event} />
        ) : (
          <EventMobileCard data={live_event} />
        )}
      </div> : ""}


   {  up_event.length > 0 ? <div className="event-slider">
        <h1>Upcoming Events</h1>
        {windowDimensions.width > 800 ? (
          <EventDesktopCard data={up_event} />
        ) : (
          <EventMobileCard data={up_event} />
        )}
      </div> : ""}

    { ended_event.length > 0 ? <div className="event-slider">
        <h1>Ended Events</h1>
        {windowDimensions.width > 800 ? (
          <EventDesktopCard data={ended_event} />
        ) : (
          <EventMobileCard data={ended_event} />
        )}
      </div> : ""
      }
    </div>
  );
}

export default ListOfEvent;

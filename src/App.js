import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import EventList from "./Components/EventList/EventList";
import EventPage from "./Components/Eventpage/EventPage";
import Header from "./Components/events/Events";
import { EventContext, EventContextProvider } from "./context";
import { getUpcommingEventList, getLiveEvents, getEndedEvents, getEventList } from "./context/action";
import { useEffect, useContext } from "react";
import Home from "./Pages/home";
import Event from "./Pages/event";

const root_path = process.env.PUBLIC_URL

function App() {
  const { state, eventContextDispatch } = useContext(EventContext);

  useEffect(() => {

    getUpcommingEventList(eventContextDispatch);
    getLiveEvents(eventContextDispatch);
    getEndedEvents(eventContextDispatch);


  }, []);

  return (
      <Routes>
        <Route path= {'/'} element={<Home />} />
        <Route path= {`${root_path}/events`} element={<EventList/>} />
        <Route path= {`${root_path}/event/info`} element={<Event />} />
      </Routes>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventList from "./Components/EventList/EventList";
import EventPage from "./Components/Eventpage/EventPage";
import Header from "./Components/events/Events";
import { EventContext, EventContextProvider } from "./context";
import { getUpcommingEventList, getLiveEvents, getEndedEvents, getEventList } from "./context/action";
import { useEffect, useContext } from "react";
import Home from "./Pages/home";
import Event from "./Pages/event";


function App() {
  const { state, eventContextDispatch } = useContext(EventContext);

  useEffect(() => {

    getUpcommingEventList(eventContextDispatch);
    getLiveEvents(eventContextDispatch);
    getEndedEvents(eventContextDispatch);


  }, []);

  return (
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route exact = {true} path="/events" element={<EventList/>} />
        <Route exact = {true} path="/event/info/:id/:type" element={<Event />} />
      </Routes>
  );
}

export default App;

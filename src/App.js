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
import ListOfEvent from "./Components/ListOfEvent/ListOfEvent";

function App() {
  const { state, eventContextDispatch } = useContext(EventContext);

  useEffect(() => {

    getUpcommingEventList(eventContextDispatch);
    getLiveEvents(eventContextDispatch);
    getEndedEvents(eventContextDispatch);


  }, []);

  return (
    <div  >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<ListOfEvent />} />
        <Route path="/event/info" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;

        // <Route path="/events" element={<EventList />} />
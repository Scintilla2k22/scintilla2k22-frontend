import React, {  useState, useEffect } from 'react'
import EventHead from '../Components/EventNew/EventHead'
import EventList from '../Components/EventNew/EventsList'
import { useContext } from 'react'
import { EventContext } from '../context'
import { useParams } from 'react-router-dom'
import { getContestantOfEvent, getTeamOfEvent } from '../context/action'

export default function Event()
{
  const params = useParams();
  
  const [data, setData] = useState([])
  const [event, setEventInfo] = useState({})

  const { state: {
    selected_event_info,
  }, eventContextDispatch } = useContext(EventContext);

  useEffect(() => {

      const {
        id = -1,
        type = -1
      } = params;

      if(type == 1)
      getTeamOfEvent(eventContextDispatch , id)
      else
      getContestantOfEvent(eventContextDispatch , id)

  }, []);


  useEffect(() => {
      setData(selected_event_info.participants)
      setEventInfo(selected_event_info.event)

      console.log("--event data", selected_event_info)
  }, [selected_event_info]);




  return (
    <div className='container-fluid position-relative p-0 m-0' 
    style={ { backgroundColor : "var(--tr_bg) " , overflow : "hidden" }} >
        <EventHead data = {event} />
        <EventList data = {data} event = {event}  type = {params.type} />
    </div>
  )
}

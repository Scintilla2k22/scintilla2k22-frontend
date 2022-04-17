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
      setData(selected_event_info)
      console.log(" event data", data)
  }, [selected_event_info]);




  return (
    <div className=' container-fluid position-relative p-0 m-0' 
    style={ { backgroundColor : "var(--tr_bg) " , overflow : "hidden" }} >
        <EventHead />
        <EventList data = {data} type = {params.type} />
    </div>
  )
}

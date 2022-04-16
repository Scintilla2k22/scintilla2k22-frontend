import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { EventContext } from '../../context'
import { getContestantOfEvent, getTeamOfEvent } from '../../context/action'
import { useSearchParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function TeamList(props) {

  const{
    id = 1, 
    type = 0
  } = props;

  const [data, setData] = useState([])
  const query = useQuery()

  console.log("query" , props)
  const { state: {
    selected_team_info,
  }, eventContextDispatch } = useContext(EventContext);


  useEffect( () => {

    if(type == 0)
    getContestantOfEvent(eventContextDispatch,id)
    else
    getTeamOfEvent(eventContextDispatch, id)

  }, [])

  useEffect(() => {

    setData(selected_team_info)

  }, [selected_team_info]);

  return (
    <div className=' container team-list-container' >
        <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Team Name</th>
      <th scope="col">Description</th>
      <th scope="col">Joined On</th>
      <th scope="col"># Members</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>

    </tr>
  </tbody>
</table>
    </div>
  )
}

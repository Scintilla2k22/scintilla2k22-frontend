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
   data = [],
   type
 } = props;

 console.log(" table data", data)

  return (
    <div className=' container team-list-container' >
        <table class="table  " width={"100%"} >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> { type == 0 ? "Name" : "Team"}</th>
      <th scope="col">{ type == 0 ? "Branch" : "# Members"}</th>
      <th scope="col">Joined On</th>
      <th scope="col">Score</th>

    </tr>
  </thead>
  <tbody>

    { data.length > 0 && data.map((item, ind) => {

      return(
        <tr>
        <th scope="row">{ind + 1}</th>
        <td>{type==0 ? item.name : item.t_name }</td>
        <td>{ type==0 ? `${item.branch}, ${item.year} year` : item.contestants.length } </td>
        <td> {item.created_on} </td>
        <td>{item.score }</td>        
      </tr>
      )
    })}
  
  </tbody>
</table>
    </div>
  )
}

import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { EventContext } from '../../context'
import { getContestantOfEvent, getTeamOfEvent } from '../../context/action'
import { useSearchParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Profile from '../Contactus/Profile';
import TeamRow from './TeamRow';
import { getDate } from '../../utils';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function TeamList(props) {

 const{
   data = [],
   type
 } = props;

 const handleClick = (ind) => {
  if(ind == open)
  setOpen(-1)
  else
  setOpen(ind)
}

const [open, setOpen] = useState(-1);

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

    { (data && data.length > 0) && data.map((item, ind) => {

      return(
        <>
        
        <tr onClick={ () => handleClick(ind)}  >
        <th scope="row" >{ind + 1}
        </th>
        <td>{type==0 ? item.name : item.t_name }</td>
        <td>{ type==0 ? `${item.branch}, ${item.year} year` :  item.contestants && item.contestants.length } </td>
        <td> { getDate(item.created_on)} </td>
        <td>{item.score }</td> 
      </tr>

        { (type == 1 && open == ind) ? <tr    className='team-box' >
         <div className='team-member-list' >
            {
                item.contestants && item.contestants.map((part) =>  <Profile data = {part} />)
            }
         </div>
       </tr> : ""
      }
       
      </>
      )
    })}
  
  </tbody>
</table>
    </div>
  )
}

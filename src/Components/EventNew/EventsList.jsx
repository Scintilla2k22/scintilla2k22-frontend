import React from 'react'
import './style.scss'
import {MdLiveTv} from 'react-icons/md'
import {BsCircle} from 'react-icons/bs'
import {IoIosOptions} from 'react-icons/io'
import TeamList from './TeamList'

export default function EventList(props) {
  
  const{
    data, 
    type
  } = props;


  return (
    <div className=' events-page-list'>
        <div className = 'event-list-blur'></div>
        <div className='toolbar'>
            <div className='options'>
                <div>
                    <MdLiveTv />
                    <IoIosOptions />
                </div>
            </div>
            <hr></hr>
        </div>

        <TeamList  data = {data} type = {type}  />
    </div>
  )
}

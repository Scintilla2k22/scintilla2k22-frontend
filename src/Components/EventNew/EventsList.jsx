import React , {useEffect} from 'react'
import './style.scss'
import {MdLiveTv} from 'react-icons/md'
import {BsCircle} from 'react-icons/bs'
import {IoIosOptions} from 'react-icons/io'
import TeamList from './TeamList'

export default function EventList(props) {
  
  const{
    data, 
    type,
    event
  } = props;

  let url = "https://www.youtube.com/channel/UC-NYMUWDLUwxruNUzpOzO4g";

  useEffect(() => {
    url = event.url
  }, []);

  console.log( "Event list", props)
  return (
    <div className=' events-page-list position-relative'>
        <div className = 'event-list-blur'></div>
        <div className='toolbar'>
            <div className='options'>
                <div>
                  <a  href = {url} target= "_blank" >
                    <MdLiveTv   />

                  </a>
                    <IoIosOptions />
                </div>
            </div>
            <hr></hr>
        </div>

        <TeamList  data = {data} type = {type}  />
    </div>
  )
}

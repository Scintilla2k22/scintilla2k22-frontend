import React , {useEffect, useState} from 'react'
import './style.scss'
import {MdLiveTv} from 'react-icons/md'
import {BsCircle} from 'react-icons/bs'
import {IoIosOptions} from 'react-icons/io'
import TeamList from './TeamList'
import Profile from '../Contactus/Profile'
import {FiMoreVertical} from 'react-icons/fi'
export default function EventList(props) {
  
  const{
    data, 
    type,
    event,
  } = props;

  const [ url, setURL] = useState("")
  const [open, setOpen] = useState(0)
  const [ cord, setCord] = useState([])
  useEffect(() => {

    event && setCord(event.co_ord)
    event && setURL(event.url)
  }, [event]);

  return (
    <div className=' events-page-list position-relative'>
        <div className = 'event-list-blur'></div>
        <div className='toolbar'>
            <div className='options'>
                <div>
                  <a  href = {url}   target= "_blank" >
                    <MdLiveTv title = "youtube link of contest"  />
                  </a>

                    <FiMoreVertical onClick={()=> setOpen(!open)} title = "coordinators"   />
                   
                </div>
            </div>
            {  open ? <>
              <hr></hr>
            <p className='cord-head m-2' > Coordinators:</p>
            <div className="cord">
                        {
                         cord.length > 0 && cord.map((co) => (
                            <Profile data = {co} />
                          ))}
                      </div>
                    </> : ""
                    }
            <hr></hr>
        </div>

        <TeamList  data = {data} type = {type}  />
    </div>
  )
}

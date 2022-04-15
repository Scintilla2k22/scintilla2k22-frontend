import React from 'react'
import { Link } from 'react-router-dom'
import { server } from '../../context/server';
// import './event.scss'
import './card.scss'
import {CgMoreO} from 'react-icons/cg'
// const loc = process.env.PUBLIC_URL

function EventCard(props) {

    const {
        data = []
    } = props;

    return (

        <div className="card-block">
            <h1  >{data.e_name}</h1>

            <img src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <div className='card-info'>
                {/* <h4>
                    More Info
                </h4>
                <p>{data.e_desc}</p> */}
                <CgMoreO />
                <Link to='/events/eventpage'>
                    <button>
                        Event Info
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EventCard
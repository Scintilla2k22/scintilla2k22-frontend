import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import './ListOfEvent.css';


import EventMobileCard from './EventMobileCard'
import EventDesktopCard from './EventDesktopCard'


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


function ListOfEvent() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className='events-list'>
            <div style={{
                background: `url('${process.env.PUBLIC_URL}/image/event-header.jpg') no-repeat center center/cover`
            }} className="event-header">

                <div className="left-header"></div>
                <div className="right-header">
                    <h1>FOllow The Events</h1>
                    <p>Start from <span>22 April</span> 2k22</p>
                </div>

            </div>

            <div className="event-slider">

                <h1>Upcoming Events</h1>
                {windowDimensions.width > 800 ? < EventDesktopCard />
                    : <EventMobileCard />
                }

            </div>

        </div >
    )
}

export default ListOfEvent
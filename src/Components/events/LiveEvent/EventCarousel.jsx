import React from 'react'
import EventCardNew from '../../EventList/Extras/EventCardNew'
import EventsRow from '../../EventList/EventsRow'
import './eventcarousel.css'

function EventCarousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <EventsRow />
                </div>
                <div className="carousel-item">
                    <EventsRow />
                </div>
                <div className="carousel-item">
                    <EventsRow />
                </div>
                <div className="carousel-item">
                    <EventsRow />
                </div>
                <div className="carousel-item">
                    <EventsRow />
                </div>
                <div className="carousel-item">
                    <EventsRow />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default EventCarousel



{/* <div className="container">
            <div className="carousel">
                <div className="carousel__face"><span>This is something</span></div>
                <div className="carousel__face"><span>Very special</span></div>
                <div className="carousel__face"><span>Special is the key</span></div>
                <div className="carousel__face"><span>For you</span></div>
                <div className="carousel__face"><span>Just give it</span></div>
                <div className="carousel__face"><span>A try</span></div>
                <div className="carousel__face"><span>And see</span></div>
                <div className="carousel__face"><span>How IT Works</span></div>
                <div className="carousel__face"><span>Woow</span></div>
            </div>
        </div> */}
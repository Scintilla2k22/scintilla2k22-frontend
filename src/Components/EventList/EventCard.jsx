import React from 'react'
import { Link } from 'react-router-dom'

const loc = process.env.PUBLIC_URL

function EventCard(props) {

    const{
        data = []
    } = props;

    return (
        <div>
            <div className="card">
                <img src={`${loc}/image/knowbuddy.png`} className="card-img-top" alt="event-card" />
                <div className="card-body">
                    <h5 className="card-title">{ data.e_name}</h5>
                    <p className="card-text">{data.e_desc}</p>
                    <Link to='/eventpage' className="btn btn-success">Check Out</Link>
                </div>
            </div>
        </div>
    )
}

export default EventCard
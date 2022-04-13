import React from 'react'

const loc = process.env.PUBLIC_URL

function EventCard() {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={`${loc}/image/knowbuddy.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-success">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default EventCard
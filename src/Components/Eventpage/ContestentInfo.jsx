import React from 'react'
import './Eventpage.css'

const loc = process.env.PUBLIC_URL

function ContestentInfo() {
    return (
        <div className='con-item ' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <div className='avtar'>
                <img src={`${loc}/image/avtaar.png`} alt="" />
            </div>
            <h5>Team Crazzy</h5>
            <div>
                <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        View Team
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContestentInfo
import React, { useState } from 'react'
import './Eventpage.css'
import { MdArrowForward, MdExpandMore, MdExpandLess } from "react-icons/md";

const loc = process.env.PUBLIC_URL

function ContestentInfo() {

    const [showTeam, setShowTeam] = useState(false);

    return (
        <div className='con-item'
            style={{ height: showTeam ? '200px' : '80px' }}>
            <div className="team-info">
                <div className='avtar'>
                    <img src={`${loc}/image/avtaar.png`} alt="" />
                    <h5>Team Crazzy</h5>
                </div>
                <div onClick={() => { setShowTeam(prev => !prev) }} className="view-team">
                    {showTeam ? <MdExpandLess style={{ fontSize: '25px' }} fontSize="large" /> :
                        <MdExpandMore style={{ fontSize: '25px' }} fontSize="large" />}
                </div>
            </div>

            {showTeam && <div className="team-member">
                <h6> <i className="fa fa-user" aria-hidden="true"></i> Team Member - 3</h6>
                <ul className="fa-ul">
                    <li>


                        <span className="fa-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                        </span>
                        Mohd Anas
                    </li>
                    <li>
                        <span className="fa-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                        </span>
                        Ayush Bisht
                    </li>

                    <li>
                        <span className="fa-li">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                        </span>
                        Sidhant Dhyani
                    </li>
                </ul>

            </div>}

        </div>
    )
}

export default ContestentInfo

    // <div>
    //             <p>
    //                 <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    //                     View Team
    //                 </button>
    //             </p>
    //             <div className="collapse" id="collapseExample">
    //                 <div className="card card-body">
    //                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    //                 </div>
    //             </div>
    //         </div >

    // < ul >
    //                 <li>Mohd Anas</li>
    //                 <li>Ayush Bisht</li>
    //                 <li>Sidhant Dhyani</li>
    //             </ >
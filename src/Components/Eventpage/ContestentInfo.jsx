import React, { useState } from 'react'
import './Eventpage.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const loc = process.env.PUBLIC_URL

function ContestentInfo() {

    const [showTeam, setShowTeam] = useState(false);

    return (
        <div className='con-item '>
            <div className="team-info">
                <div className='avtar'>
                    <img src={`${loc}/image/avtaar.png`} alt="" />
                </div>
                <h5>Team Crazzy</h5>
                <div onClick={() => { setShowTeam(prev => !prev) }} className="view-team">
                    <ArrowForwardIcon fontSize="large" />
                </div>
            </div>

            {showTeam && <div className="team-member">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corrupti iusto nihil perferendis dolorem quas dicta laboriosam at sapiente necessitatibus nisi, aut corporis asperiores tempora vero iure et quis minus ipsa fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt, doloremque at quasi qui, possimus et quod fugit ut sequi accusantium, delectus fugiat quo deserunt modi molestias odit. Quia quis consequatur quas.

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
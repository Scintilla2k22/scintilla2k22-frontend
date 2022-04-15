import React from 'react'
import './contact.scss'

const loc = process.env.PUBLIC_URL
function Profile() {
    return (
        <div className="coordinator-profile">
            <img src={`${loc}/image/avtaar.png`} alt="avtaaar" />
            <div className='profile-info'>
                <p className="name">Mohd Anas</p>
                <p className="role">Tech Head</p>
                <p className="phone">+91 9999999999</p>
            </div>
        </div>
    )
}

export default Profile
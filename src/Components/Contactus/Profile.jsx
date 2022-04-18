import React from 'react'
import './contact.scss'
import { avatarList } from '../../utils/avatarList'

const loc = process.env.PUBLIC_URL

function Profile(props) {
    const{
        id = 0,
        name = "Ayush",
        branch = "CSE",
        year = "3rd year",
        contact_number="102221",
        gender = "male"
    } = props.data || {}

    const img = avatarList[gender][id%4].path;
    return (
        <div className="coordinator-profile">
            <img src={img} alt="avtaaar" />
            <div className='profile-info'>
                <p className="name">{ name}</p>
                <p className="role">{branch} {", "} {year} </p>
                <p className="phone">+91{ contact_number }</p>
            </div>
        </div>
    )
}

export default Profile
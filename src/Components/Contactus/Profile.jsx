import React from 'react'
import './contact.scss'
import { avatarList } from '../../utils/avatarList'

const loc = process.env.PUBLIC_URL

const getYear = (year) => {
    switch(year){
        case "1" :
            return "1st year"
        case "2":
            return "2nd year"
        case "3":
            return "3rd year"
        case "4":
            return "final year"
        default :
            return year
    }
}

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
                <p className="role">{branch} {", "} {getYear(year)} </p>
                <p className="phone">+91{ contact_number }</p>
            </div>
        </div>
    )
}

export default Profile
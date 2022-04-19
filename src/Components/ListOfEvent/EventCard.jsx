import React, { useState } from "react";
import "./ListOfEvent.scss";
import { Link } from "react-router-dom";
import { getEventSvg } from "../../utils/eventImg";
const loc = process.env.PUBLIC_URL;


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 

const getShortMonthName = (date) => {
    return monthNames[date.getMonth()].substring(0, 3);
}


function EventCasd(props) {
  const { e_name, e_desc, type, id, code, e_time } = props.data || {};

  const [showButton, setShowButton] = useState(false);

  var dt = new Date(e_time)
 

  return (
    <div
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
      className="event-card"
    >
      <div className="event-img">
        <img src={getEventSvg(code)} alt="" />
      </div>

      <div className="events-info">
        <div className="left-info">
          <p className="month"> {getShortMonthName(dt) } </p>
          <p className="date">{dt.getDay()}</p>
        </div>
        <div className="right-info">
          <p className="event-name">{e_name}</p>
          <p className="event-desc">{e_desc}</p>
        </div>
      </div>
      {showButton && (
        <Link to={`/event/info/${id}/${type}`}>
          <button className="info-btn">More Info</button>
        </Link>
      )}
    </div>
  );
}

export default EventCasd;

{
  /* </Link> */
}

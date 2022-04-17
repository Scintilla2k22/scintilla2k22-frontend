import React from "react";
import "./style.scss";
import { asset } from "../../utils";
import Asteroids from "../Arts/asteroids";
import Planet from "../Arts/planet";



export default function EventHead(props) {
  const {
    e_name,
    e_desc,
    e_time,
    status, 
    url,
    image
  } = props.data || {};
  return (
    <div className="event-page-header">

      <div className="head-blur"></div>
        { 
            [2,2,2,2,2].map(( ind ) => <Asteroids />)
        }
      {[2,3,4].map( ind => <Planet /> )}

      <div className="row p-3">
        <div className="col-lg-4 event-page-header-left">
            <img src = {`${asset}/image/sci-assets/dance.svg`}  />
        </div>
        <div className="col-md-12  col-lg-8 event-page-header-right">
          <div className="event-info-box">
            <span></span>
            <h2 className="heading2"> {e_name} Competetion</h2>
            <p className="event-desc eventDesc" > {e_desc}</p>
            <p className="event-time eventTime"> Starting on &nbsp;: &nbsp;{e_time}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

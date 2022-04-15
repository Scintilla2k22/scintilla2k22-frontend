import React from "react";
import "./style.scss";
import { asset } from "../../utils";
import Asteroids from "../Arts/asteroids";
export default function EventHead(props) {
  const {} = props.data || {};
  return (
    <div className="event-page-header">

      <div className="head-blur"></div>
        { 
            [2,2,2,2,2].map(( ind ) => <Asteroids />)
        }
      <div className="row p-3">
        <div className="col-lg-4 event-page-header-left">
            <img src = {`${asset}/image/sci-assets/dance.svg`}  />
        </div>
        <div className="col-md-12  col-lg-8 event-page-header-right">
          <div className="event-info-box">
            <span></span>
            <h2 className="heading2">Dancing Competation</h2>
            <p className="event-desc eventDesc" >"Lorem ipsum dolor sit amet."</p>
            <p className="event-time eventTime"> Starting on 22 april 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Planet from "../Arts/planet";
import EventCardNew from "./EventCardNew";
import "./eventNew.scss";
export default function EventsRow() {
  return (
    <div className="container-fluid ">


      <div class="e-row">
        <div class="wire-box">
        </div>
        <div class="e-card">
          <EventCardNew />
        </div>
        <div class="wire-box">
        </div>
        <div class="e-card">
          <EventCardNew />
        </div>
      </div>

      <div class="e-row e-separate">
        <div class="wire-box">
          <div class="wire"></div>
        </div>
        <div class="e-card">
          <div className="e-s-col"></div>
        </div>
        <div class="wire-box">
          <div class="wire"></div>
        </div>
        <div class="e-card">
          <div className="e-s-col"></div>
        </div>
      </div>

      <div class="e-row">
        <div class="wire-box">
          <div class="wire"></div>
        </div>
        <div class="e-card">
          <EventCardNew />
        </div>
        <div class="wire-box">
          <div class="wire"></div>
        </div>
        <div class="e-card">
          <EventCardNew />
        </div>
      </div>


    </div>
  );
}

import axios from "axios";
import {
  get_all_events,
  get_event,
  get_participants,
  get_team,
  filter_event_status
} from "./api";

import { comparator } from "../utils";

export const getEventList = async (dispatch) => {
  const response = await axios({
    method: "get",
    url: get_all_events,
  }).then(function (response) {
    return response;
  });

  if (response) {
    dispatch({ type: "GET_EVENT_LIST", payload: response.data.data });
  }
};

export const getUpcommingEventList = async (dispatch) => {
  const response = await axios({
    method: "get",
    url: `${filter_event_status}/1/`,
  }).then(function (response) {
    return response;
  });

  console.log("response", response.data);
  if (response.data) {
    dispatch({ type: "GET_UPCOMMING_EVENTS", payload: response.data.data });
  }
};

export const getLiveEvents = async (dispatch) => {
  const response = await axios({
    method: "get",
    url: `${filter_event_status}/2/`,
  }).then(function (response) {
    return response;
  });

  if (response) {
    dispatch({ type: "GET_LIVE_EVENTS", payload: response.data.data });
  }
};

export const getEndedEvents = async (dispatch) => {
  const response = await axios({
    method: "get",
    url: `${filter_event_status}/3/`,
  }).then(function (response) {
    return response;
  });
  if (response) {
    dispatch({ type: "GET_ENDED_EVENTS", payload: response.data.data });
  }
};

export const getContestantOfEvent = async (dispatch, id) => {
  
  const response = await axios({
    method: "get",
    url: `${get_participants}/${id}/`,
  }).then(function (response) {
    return response;
  });

  let data = response.data.data || [];

  data.sort((a,b) => b.score - a.score)

  const event_info = await axios({
    method : "get",
    url : `${get_event}/${id}/`
  }).then( (res) => {
    return res.data.data
  });

  console.log("response" , response)
  if (response) {
    dispatch({ type: "GET_SELECTED_EVENT_INFO", payload: { participants :  data, event : event_info} });
  }
};

export const getTeamOfEvent = async (dispatch, id) => {
  
  const response = await axios({
    method: "get",
    url: `${get_team}/${id}/`,
  }).then(function (response) {
    return response;
  });

  let data = response.data.data || [];
  data.sort((a,b) => b.score - a.score)


  const event_info = await axios({
    method : "get",
    url : `${get_event}/${id}/`
  }).then( (res) => {
    return res.data.data
  });

  console.log("response" , response)
  if (response) {
    dispatch({ type: "GET_SELECTED_EVENT_INFO", payload: { participants :  data, event : event_info} });
  }
};



import axios from "axios";
import {
  filter_event_type,
  get_all_events,
  get_participants,
  get_team,
} from "./api";


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
    url: `${filter_event_type}/0/`,
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
    url: `${filter_event_type}/1/`,
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
    url: `${filter_event_type}/2/`,
  }).then(function (response) {
    return response;
  });
  if (response) {
    dispatch({ type: "GET_ENDED_EVENTS", payload: response.data.data });
  }
};

export const getContestantOfEvent = (team_id) => async (dispatch) => {
  const response = axios({
    method: "get",
    url: `${get_participants}/${team_id}/`,
  }).then(function (response) {
    return response;
  });
  if (response) {
    dispatch({ type: "GET_SELECTED_EVENT_INFO", payload: response.data.data });
  }
};

export const getTeamOfEvent  = async (dispatch, team_id) => {
  const response = axios({
    method: "get",
    url: `${get_team}/${team_id}/`,
  }).then(function (response) {
    return response;
  });

  if (response) {
    dispatch({ type: "GET_SELECTED_EVENT_INFO", payload: response.data.data });
  }
};

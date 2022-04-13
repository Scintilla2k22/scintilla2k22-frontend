import axios from 'axios'
import { filter_events, get_all_events, get_contestants, get_team } from './api';

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BASE_URL_PROD
    : process.env.REACT_APP_BASE_URL_DEV;

axios.defaults.baseURL = "http:127.0.0.1:8000"


export const getEventList = (dispatch) => async () => {
  const { response } = await axios("GET", get_all_events);

  if (response) {
    dispatch({ type: "GET_EVENT_LIST", payload: response.data });
  }
};




export const getUpcommingEventList = (dispatch) => async () => {
    console.log("anas chutiya")
    const { response } = await axios("GET",`${filter_events}/0`);
  
    if (response) {
      dispatch({ type: "GET_UPCOMMING_EVENTS", payload: response.data });
    }
  };
  

  
export const getLiveEvents = (dispatch) => async () => {
    const { response } = await axios("GET", `${filter_events}/1`);
  
    if (response) {
      dispatch({ type: "GET_LIVE_EVENTS", payload: response.data });
    }
  };
  

  export const getEndedEvents = (dispatch) => async () => {
    const { response } = await axios("GET", `${filter_events}/2`);
  
    if (response) {
      dispatch({ type: "GET_ENDED_EVENTS", payload: response.data });
    }
  };
  

//   export const getContestantOfEvent = (team_id) => async (dispatch) => {
//     const { response } = await axios("GET", `${get_contestants}/${team_id}/`);
  
//     if (response) {
//       dispatch({ type: "GET_SELECTED_EVENT_INFO", payload: response.data });
//     }
//   };


  export const getTeamOfEvent = (team_id) => async (dispatch) => {
    const { response } = await axios("GET", `${get_team}/${team_id}/`);
  
    if (response) {
      dispatch({ type: "GET_SELECTED_EVENT_INFO", payload: response.data });
    }
  };

  
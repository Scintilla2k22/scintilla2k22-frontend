export const initialState = {
  upcomming_events: [],
  live_events: [],
  ended_events: [],
  selected_event_info: [],
  selected_team_info: [],
  event_list: [],
};

export const eventReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_EVENT_LIST":
      return {
        ...state,
        event_list: payload,
      };

    case "GET_UPCOMMING_EVENTS":
      return {
        ...state,
        upcomming_events: payload,
      };

    case "GET_LIVE_EVENTS":
      return {
        ...state,
        live_events: payload,
      };
    case "GET_ENDED_EVENTS":
      return {
        ...state,
        ended_events: payload,
      };

    case "GET_SELECTED_EVENT_INFO":
      return {
        ...state,
        selected_event_info: payload,
      };
    default:
      return state;
  }
};

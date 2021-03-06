import { server } from "./server"

const event_api = `${server}/api/events`;
const participants_api = `${server}/api/participants`;


export const get_all_events =   `${event_api}/get_events/`
export const get_event =   `${event_api}/get_event`
export const filter_event_status =  `${event_api}/filter_event_status`
export const filter_events =  `${event_api}/filter_events/`

export const get_participants =  `${participants_api}/get_contestants`
export const get_team =  `${participants_api}/get_team`

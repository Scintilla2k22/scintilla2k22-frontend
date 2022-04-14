import React, { createContext, useReducer } from "react";
import { initialState, eventReducer } from "./reducer";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
    const [state, eventContextDispatch] = useReducer(eventReducer, initialState);

    return (
        <EventContext.Provider value={{ state, eventContextDispatch }}>
            {children}
        </EventContext.Provider>
    )
};
import React, { createContext, useReducer, useContext } from "react";

// Need Context API
// To track basket and To Track user

// Prepares the Data layer
export const StateContext = createContext();

// create Provider
//wraps our app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use inside component
//pull information from the data layera
export const useStateValue = () => useContext(StateContext);
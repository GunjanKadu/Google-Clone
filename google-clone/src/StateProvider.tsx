import React, { createContext, useContext, useReducer } from "react";
import { InitalStateProps } from "./Reducer";

interface StateProviderProps {
  reducer: any;
  initialState: InitalStateProps;
  children: any;
}
// Preparing the data layer
export const StateContext = createContext({});

export const StateProvider = (prop: StateProviderProps): any => (
  <StateContext.Provider value={useReducer(prop.reducer, prop.initialState)}>
    {prop.children}
  </StateContext.Provider>
);

// Hook which allows us to pull information from the data layer
export const useStateValue: any = () => useContext(StateContext);

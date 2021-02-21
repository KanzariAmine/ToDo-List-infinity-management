import React, { createContext, useReducer } from "react";
import { tacheReducer, initialState } from "../reducers/tacheReducer";

export const TacheContext = createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(tacheReducer, initialState);

  return (
    <TacheContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TacheContext.Provider>
  );
};

export default ContextProvider;

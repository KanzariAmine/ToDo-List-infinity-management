import { createContext, useReducer } from "react";
import { authReducer, initialState } from "../reducers/authReducer";

export const AuthContext = createContext();

const ContextAuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default ContextAuthProvider;

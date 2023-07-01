import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

const initialState = {
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

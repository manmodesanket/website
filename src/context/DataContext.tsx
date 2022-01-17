import React, { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/Data.reducer";
import { DATA_CONTEXT, GLOBAL_STATE } from "../types/DataType.types";

export const DataContext = createContext<DATA_CONTEXT>({} as DATA_CONTEXT);

export const useData = () => useContext(DataContext);

const initState: GLOBAL_STATE = {
  mode: "moon",
};

export const DataProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initState);

  const providerState: DATA_CONTEXT = {
    data: state,
    dispatch: dispatch,
  };

  return (
    <DataContext.Provider value={providerState}>
      {children}
    </DataContext.Provider>
  );
};

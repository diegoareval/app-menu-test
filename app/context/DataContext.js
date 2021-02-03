import React, { createContext, useState } from "react";
import { fields } from "../form/fields";
import { getInitialState } from "../helpers/getData";

// creating the main context
export const MainContext = createContext(null);

const DataContext = ({ children }) => {
    // generating the initial state related existing fields
  const fieldKeys = Object.keys(fields);
  const [data, setData] = useState(getInitialState(fieldKeys));
  
  // clean data should work
  const cleanData = () => {
    setData(getInitialState(fieldKeys))
  }
  const initialState = {
    data,
    setData,
    cleanData
  };

  return (
    <MainContext.Provider value={initialState}>{children}</MainContext.Provider>
  );
};

export default DataContext;

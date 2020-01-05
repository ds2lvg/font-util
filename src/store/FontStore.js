import React, { createContext, useReducer } from 'react';
import { fontReducer } from '../store/fontReducer';

export const FontContext = createContext();
export const CHANGE_INPUT = "CHANGE_INPUT";

const initialState = {

};

const FontStore = (props) => {
  const [fonts, dispatch] = useReducer(fontReducer, initialState);

  return (
    <FontContext.Provider value={{fonts, dispatch}}> 
      {props.children}
    </FontContext.Provider>
  );
};

export default FontStore;
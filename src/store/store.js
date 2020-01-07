import React, { createContext, useReducer } from 'react';
import { fontReducer } from './fontReducer';

export const FontContext = createContext();

export const CHANGE_INPUT = "CHANGE_INPUT";
export const RESET_INPUT = "RESET_INPUT";

export const fontNames = [
  {"notosanskr": "노토산스"},
  {"spoqahansans": "스포카한산스"},
  {"nanumbarungothic": "나눔바른고딕"},
  {"nanumsquare":"나눔스퀘어"},
  {"nanumsquareround":"나눔스퀘어라운드"},
  {"kopubdotum":"코펍돋움"},
  {"kopubbatang":"코펍바탕"},
  {"sans-serif":"산세리프"},
];

export const initialState = {
  size: 18,
  weight: 4,
  content: "입력하신 텍스트 내용이 보입니다.",
  colorCode: "#000000",
};

const Store = (props) => {
  const [fonts, dispatch] = useReducer(fontReducer, initialState);

  return (
    <FontContext.Provider value={{fonts, dispatch}}> 
      {props.children}
    </FontContext.Provider>
  );
};

export default Store;
import React, { useContext } from 'react';
import { fontNames, FontContext } from '../store/store';

const FontList = ({textContent}) => {
  const {fonts} = useContext(FontContext);
  console.log(fonts)
  const styling = {
    fontSize: fonts.size+"px",
    fontWeight: fonts.weight*100,
  }
  return (
    fontNames.map((v,i) => {
      const familyEN = Object.keys(v)[0];
      const familyKR = v[familyEN];
      return (
        <ul key={familyEN} className={familyEN} style={styling}>
          <li>안녕하세요 {familyKR}입니다</li>
          <li>hello {familyEN}</li>
          <li>{fonts.content}</li>
        </ul>
      );
    })
  );
  
};

export default FontList;
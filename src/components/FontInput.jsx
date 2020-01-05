import React, { useRef, useContext } from 'react';
import { FontContext, CHANGE_INPUT } from '../store/FontStore';

const FontInput = ({label}) => {
  const ref = useRef();
  const { dispatch } = useContext(FontContext);

  const handleChange = () => {
    dispatch({type: CHANGE_INPUT, payload: ref.current.value});
  }

  return (
    <li>
      <label htmlFor="">{label}</label>
      <input type="text" onChange={handleChange} ref={ref} />
    </li>
  );
};

export default FontInput;
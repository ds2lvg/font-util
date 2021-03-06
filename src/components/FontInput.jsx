import React, { useRef, useContext, memo } from 'react';
import { FontContext, CHANGE_INPUT } from '../store/store';

const FontInput = memo(({target, label, type, placeholder}) => {
  const ref = useRef();
  const { dispatch } = useContext(FontContext);

  const handleChange = () => {
    dispatch({type: CHANGE_INPUT, target: target, payload: ref.current.value});
  }

  return (
    <li>
      <label htmlFor="">{label}</label>
      <input type={type} className={"ipt_"+type} onChange={handleChange} ref={ref} placeholder={placeholder} />
    </li>
  );
});

export default FontInput;
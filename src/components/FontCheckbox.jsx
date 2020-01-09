import React, { useRef, useContext, useState } from 'react';
import { FontContext, CHANGE_CHECKBOX } from '../store/store';

const FontCheckbox = ({target, enKey, label, idx}) => {
  const ref = useRef();
  const [check, setCheck] = useState(true);
  const { dispatch } = useContext(FontContext);

  const handleChange = (e) => {
    setCheck(e.target.checked);
    dispatch({type: CHANGE_CHECKBOX, target: target, payload: [enKey, label, e.target.checked, idx] });
  }

  return (
    <li>
      <label htmlFor="">{label}</label>
      <input type="checkbox" name={enKey} onChange={handleChange} checked={check}/>
    </li>
  );
};

export default FontCheckbox;
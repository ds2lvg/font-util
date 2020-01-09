import React, { useRef, useContext, useState, useEffect } from 'react';
import { FontContext, CHANGE_CHECKBOX } from '../store/store';

const FontCheckbox = ({target, enKey, label, idx, allCheck}) => {
  const [check, setCheck] = useState(true);
  const { dispatch } = useContext(FontContext);

  useEffect(() =>{
    if(!allCheck) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [allCheck])

  const handleChange = (e) => {
    setCheck(e.target.checked);
    dispatch({type: CHANGE_CHECKBOX, target: target, payload: [enKey, label, e.target.checked, idx] });
  }
  return (
    <li>
      <label htmlFor="">{label}</label>
      <input type="checkbox" name={enKey} onChange={handleChange} checked={check} />
    </li>
  );
};

export default FontCheckbox;
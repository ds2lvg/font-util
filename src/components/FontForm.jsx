import React, { useContext, useRef } from 'react';
import FontInput from './FontInput';
import { FontContext, RESET_INPUT } from '../store/store';

const FontForm = () => {
  const { dispatch } = useContext(FontContext);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: RESET_INPUT});
    formRef.current.reset();
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <ul>
        <FontInput target="size" type="number" label="size(px)" placeholder="14" />
        <FontInput target="weight" type="number" label="weight(1~9)" placeholder="1" />
        <FontInput target="content" type="text" label="content" placeholder="입력하신 텍스트 내용이 보입니다." />
        <li><button>입력창 초기화</button></li>
      </ul>
    </form>
  );
};

export default FontForm;
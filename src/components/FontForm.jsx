import React, { useContext, useRef, memo } from 'react';
import FontInput from './FontInput';
import FontCheckbox from './FontCheckbox';
import { FontContext, RESET_INPUT, fontNames } from '../store/store';

const FontForm = memo(() => {
  const { dispatch, fonts } = useContext(FontContext);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: RESET_INPUT});
    formRef.current.reset();
  }

  return (
    <>
    <div className="checkFontBox">
      <ul>
        {fontNames.map((v, i)=> {
          let k = Object.keys(v);
          return <FontCheckbox target="usingfontNames" label={v[k]} enKey={k} idx={i} key={k+i} />
        })}
      </ul>
      <button>모두 체크</button>
    </div>
    <form onSubmit={handleSubmit} ref={formRef}>
      <ul className="input_wrap">
        <FontInput target="size" type="number" label="size(px)" placeholder={fonts.size} />
        <FontInput target="weight" type="number" label="weight(1~9)" placeholder={fonts.weight} />
        <FontInput target="colorCode" type="color" label="color(#)" placeholder={fonts.colorCode} />
        <FontInput target="content" type="text" label="content" placeholder="입력하신 텍스트 내용이 보입니다." />
        <li><button className="btn_reset">입력창 초기화</button></li>
      </ul>
    </form>
    </>
  );
});

export default FontForm;
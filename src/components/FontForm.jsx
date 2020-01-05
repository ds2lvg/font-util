import React from 'react';
import FontInput from './FontInput';

const FontForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleClick = (e) => {
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <FontInput target="size" type="number" label={"사이즈(px)"} />
        <FontInput target="weight" type="number" label={"두께(1~9)"} />
        <FontInput target="content" type="text" label={"본문내용"} />
        <li><button onClick={handleClick}>입력창 초기화</button></li>
      </ul>
    </form>
  );
};

export default FontForm;
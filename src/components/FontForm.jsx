import React, { useState } from 'react';
import FontInput from './FontInput';

const FontForm = () => {
  // const [] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <FontInput label={"사이즈"} />
        <FontInput label={"두께(1~9)"} />
        <FontInput label={"본문내용"} />
      </ul>
    </form>
  );
};

export default FontForm;
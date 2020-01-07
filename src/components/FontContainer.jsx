import React from 'react';
import FontForm from './FontForm';
import FontList from './FontList';

const FontContainer = () => {
  return (
    <>
      <h1 className="web_title">Font Customizing</h1>
      <header>
        <FontForm />
      </header>
      <div className="container">
        <FontList />
      </div>
      <address>
        jongmin Kim A.K.A Reinkaos<br />
        ds2lvg@gmail.com<br />
      </address>
    </>
  );
};

export default FontContainer;
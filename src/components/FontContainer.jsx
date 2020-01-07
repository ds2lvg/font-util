import React from 'react';
import FontForm from './FontForm';
import FontList from './FontList';

const FontContainer = () => {
  return (
    <>
      <header>
        <h1 className="web_title">Font Customizing</h1>
        <FontForm />
      </header>
      <div className="container">
        <FontList />
      </div>
      <address>
        jongmin Kim A.K.A Reinkaos<br />
        <a href="mailto:ds2lvg@gmail.com">ds2lvg@gmail.com</a>
      </address>
    </>
  );
};

export default FontContainer;
import React from 'react';
import FontForm from './FontForm';
import FontList from './FontList';

const FontContainer = () => {
  return (
    <>
      <h1>Font Customizing</h1>
      <FontForm />
      <FontList />
    </>
  );
};

export default FontContainer;
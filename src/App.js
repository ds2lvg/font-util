import React from 'react';
import './App.css';
import FontContainer from './components/FontContainer';
import Store from './store/store';

function App() {
  return (
    <Store>
      <FontContainer />
    </Store>
  );
}

export default App;

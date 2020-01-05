import React from 'react';
import './App.css';
import FontContainer from './components/FontContainer';
import FontStore from './store/FontStore';

function App() {
  return (
    <FontStore>
      <FontContainer />
    </FontStore>
  );
}

export default App;

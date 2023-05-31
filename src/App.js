import React, { useState } from 'react';
import Tetris from './components/Tetris';
import CloudsComponent from './CloudsComponent';

import './App.css';

const App = () => {
  const [showTetris, setShowTetris] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'f') {
      setShowTetris(true);
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      {!showTetris ? <CloudsComponent /> : null}
      {showTetris ? <Tetris /> : null}
    </div>
  );
};

export default App;

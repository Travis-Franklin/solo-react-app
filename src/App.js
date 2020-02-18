import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './Greet.js';
import Greet from './Greet';
import Counter from './Counter';
import HowManyToWin from './HowManyToWin';

function App() {
  return (
    <div className="App">
      <h1>Take Me to Your Leader</h1>
      <HowManyToWin
        
      />
      <Counter/>
      <Greet
        whom="Travis"
        how="Hi there"
      />
    </div>
  );
}

export default App;

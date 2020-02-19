import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './Greet.js';
import Player from './Player';
import Counter from './Counter';
import HowManyToWin from './HowManyToWin';
import HowManyPlayers from './HowManyPlayers';

function App() {
  return (
    <div className="App">
      <h1>Take Me to Your Leader</h1>
      <HowManyToWin
      />
      {/* <Counter/>
      <Player
        whom="Travis"
        how="Hi there"
      /> */}
      <HowManyPlayers/>
    </div>
  );
}

export default App;

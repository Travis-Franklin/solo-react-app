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
      <h2>A leaderboard to track who is up and who is down. 
        Made for Office Pools, Friendly Competitions and 
        Presidential Primaries.</h2>
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

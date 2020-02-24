import React from 'react';
import './App.css';
import HowManyToWin from './HowManyToWin';

function App() {
  return (
    <div className="App">
      <h1 className ="title" >Take Me to Your Leader</h1>
      <p>A leaderboard to track who is up and who is down. <br/> 
        Made for Office Pools, Friendly Competitions and 
        Presidential Primaries.</p>
      <HowManyToWin
      />
          
    </div>
  );
}

export default App;

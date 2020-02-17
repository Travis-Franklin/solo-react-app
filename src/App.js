import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './Greet.js';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Greet
        whom="Travis"
        how="Hi there"
      />
    </div>
  );
}

export default App;

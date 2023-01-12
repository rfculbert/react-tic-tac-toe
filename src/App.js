import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Square from './Square'



function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const propVariable = 'This is a prop'
  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square 
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;

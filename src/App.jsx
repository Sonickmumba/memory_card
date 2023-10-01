import { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Score from './components/score/Score';
import Game from './components/game/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Header />
        <Score />
        <Game />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App

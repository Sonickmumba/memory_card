// import { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Score from './components/score/Score';
import Game from './components/game/Game';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Header />
        <Score />
        <Game />
      </div>
    </>
  )
}

export default App

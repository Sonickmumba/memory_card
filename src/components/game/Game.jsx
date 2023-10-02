import React, { useEffect, useState } from 'react'

const Game = () => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("sonick")
  }, [])
  return (
    <><div>Game</div><button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button></>
  )
};

export default Game

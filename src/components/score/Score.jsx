// import React from 'react'

const Score = (props) => {
  // const { counter } = props;
  return (
    <div className="scores-div">
      <div className="score-best">
        <p>Scores: {props.passData}</p>
        {props.passData !== 0 ? (
          <p>BestScore: {props.passData}</p>
        ) : (
          <p>BestScore: 0</p>
        )}
      </div>
    </div>
  )
}

export default Score

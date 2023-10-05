// import React from 'react'

const Score = (props) => {
  // const { counter } = props;
  return (
    <div className="scores-div">
      <div className="score-best">
        <p>Scores: {props.passData}</p>
        <p>Best scores: 9</p>
      </div>
    </div>
  )
}

export default Score

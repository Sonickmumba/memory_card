// import React from 'react'
import { PropTypes } from "prop-types";

const Score = (props) => {
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

Score.propTypes = {
  passData: PropTypes.number.isRequired
}

export default Score



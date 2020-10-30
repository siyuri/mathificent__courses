import React from 'react';

function Game(props) {
  return (
    <div>
      Operation is <strong>{props.operation}</strong>;
      Max number is <strong>{props.maxNumber}</strong>
    </div>
  )
}
export default Game;
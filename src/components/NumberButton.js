import React from 'react';

function NumberButton(props) {
  return (
    <button className="btn btn-warning text-white" onClick={() => { props.handleClick(props.value) }}>{props.value}</button>
  )
}
export default NumberButton;

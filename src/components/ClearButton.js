import React from 'react'

function ClearButton(props) {
  return (
    <button className="btn btn-warning text-white" onClick={() => { props.handleClick(''); }} style={{ width: "4.2em" }}>Clear</button>
  )
}
export default ClearButton;

import React from 'react';
import { Link } from 'react-router-dom';
function PlayButton() {
  return (
    <Link style={{ color: '#212529' }} className="btn btn-warning form-control" to="/Game">Play!</Link>
  )
}
export default PlayButton;
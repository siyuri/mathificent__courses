import React, { useEffect } from 'react';

function Keyboard({ setUserAnswer }) {
  useEffect(() => {
    const handleKeyUp = (e) => {
      e.preventDefault(); //prevent the normal behavior of the key
      if (e.keyCode === 32 || e.keyCode === 13) {
        //space/enter
        setUserAnswer('');
      }
      else if (e.keyCode === 8) {
        //backspace
        setUserAnswer(prevUserAnswer => prevUserAnswer.substring(0, prevUserAnswer.length - 1));
      }
      else if (!isNaN(e.key)) {
        //Number() will remove leading 0
        setUserAnswer(prevUserAnswer => String(Number(prevUserAnswer + e.key)));
      }
    }
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp); //cleaner
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [])//no dependencies. will only run on mounting
  return null; //this component doesnt output anything
}
export default Keyboard;
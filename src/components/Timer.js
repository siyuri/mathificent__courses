import React, { useEffect } from 'react'

function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timer); //cleanup
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <strong>Time: {timeLeft}</strong>
  )
}
export default Timer;
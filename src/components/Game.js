import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Score from './Score';
import Timer from './Timer';
import Equation from './Equation';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import Keyboard from './Keyboard';
import './Game.css';
import { randInt } from '../helpers/helpers';


function Game({ operation, maxNumber }) {
  let randNums = getRandNumbers(operation, 0, maxNumber);
  const [operands, setOperands] = useState(randNums)
  const question = operands.num1 + ' ' + operation + ' ' + operands.num2;
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false)
  const gameLength = 60;
  const [timeLeft, setTimeLeft] = useState(gameLength);

  function appendToAnswer(num) {
    setUserAnswer(String(Number(userAnswer + num)));
  }
  function getRandNumbers(operator, low, high) {
    let num1 = randInt(low, high);
    let num2 = randInt(low, high);
    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);
    if (operator === '-') {
      //make sure higher number is always first
      num1 = numHigh;
      num2 = numLow;
    }
    if (operator === '/') {
      //no division by zero
      if (num2 === 0) {
        num2 = randInt(1, high);
        num1 = (num1 * num2);
      }
    }
    return { num1, num2 }
  }

  function checkAnswer(userAnswer) {
    if (isNaN(userAnswer))
      return false; //user hasn't unswer
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = operands.num1 + operands.num2;
        break
      case '-':
        correctAnswer = operands.num1 - operands.num2;
        break
      case '*':
        correctAnswer = operands.num1 * operands.num2;
        break
      default:
        correctAnswer = operands.num1 / operands.num2;
    }
    return (parseInt(userAnswer) === correctAnswer)
  }
  function newQuestion() {
    setUserAnswer('');
    setAnswered(false);
    randNums = getRandNumbers(operation, 0, maxNumber);
    setOperands(randNums)
  }
  function restart() {
    setTimeLeft(gameLength);
    setScore(0);
    newQuestion();
  }
  if (!answered && checkAnswer(userAnswer)) {
    setAnswered(true);
    setScore(score + 1);
    setTimeout(newQuestion, 200)
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberButtons = numbers.map((number) => <NumberButton value={number} key={number} handleClick={appendToAnswer} />)
  const equationClass = answered
    ? 'row my-2 text-secondary fade'
    : 'row my-2 text-secondary';
  if (timeLeft === 0) {
    return (
      <div className="text-center" id="game-container">
        <h2 className="text-warning">Time's Up!</h2>
        <strong style={{ fontSize: "1.5rem" }}>You answered</strong>
        <p style={{ fontSize: "5rem" }}>{score}</p>
        <strong style={{ fontSize: "1.5rem" }}>Questions correctly!</strong>
        <button className="btn btn-warning form-control m-1" onClick={restart}>
          Play Again With Same Settings
    </button>
        <Link className="btn btn-warning from-control m-1" to="/">
          Change Settings
    </Link>
      </div>
    )
  }
  return (
    <main className="text-center" id="game-container">
      <div className="row text-warning border-bottom" style={{ fontSize: "1.5rem" }}>
        <div className="col px-3 text-left">
          <Score score={score} />
        </div>
        <div className="col px-3 text-right">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </div>
      </div>
      <div className={equationClass} id="equation" style={{ fontSize: "1.5rem" }}>
        <Equation question={question} answer={userAnswer} />
      </div>
      <div className="row" id="buttons">
        <div className="col">
          {numberButtons}
          <ClearButton handleClick={setUserAnswer} />
        </div>
      </div>
      <Keyboard setUserAnswer={setUserAnswer} />
    </main>
  )
}
export default Game;
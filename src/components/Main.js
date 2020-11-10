import React from 'react';
import SelectInput from './SelectInput';
import PlayButton from './PlayButton';

function Main(props) {
  const operations = [
    ['Addition', '+'],
    ['Subtraction', '-'],
    ['Multiplication', '*'],
    ['Devision', '/']
  ];
  // Create an empty array inside the Main component that will hold the list of numbers that we’ll use to populate the maximum number dropdown:

  const numbers = [];

  // Use a for loop to create an array of the numbers from 2 to 100
  for (let i = 2; i <= 100; i++) {
    numbers.push([i, i])
  }
  return (
    <main>
      <h1 className="title text-dark">Mathificent</h1>
      {/* adding to select array of operations that we created earlier */}
      <div className="row mx-1 my-3">
        <SelectInput label="Operation"
          id="operation"
          currentValue={props.operation}
          setCurrentValue={props.setOperation}
          values={operations} />
      </div>
      <div className="row mx-1 my-3">
        <SelectInput label="Maximum Number"
          id="max-number"
          currentValue={props.maxNumber}
          setCurrentValue={props.setMaxNumber}
          values={numbers} />
      </div>
      <div className="row mx-1 my-3">
        <PlayButton />
      </div>
    </main>
  )
}
export default Main;
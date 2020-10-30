import React from 'react';
import SelectInput from './SelectInput';
import PlayButton from './PlayButton';

function Main(props) {
  const operations = ['+', '-', '*', '/'];
  // Create an empty array inside the Main component that will hold the list of numbers that we’ll use to populate the maximum number dropdown:

  const numbers = [];

  // Use a for loop to create an array of the numbers from 2 to 100
  for (let i = 2; i <= 100; i++) {
    numbers.push(i)
  }
  return (
    <main>
      {/* adding to select array of operations that we created earlier */}
      <SelectInput label="Operation"
        id="operation"
        currentValue={props.operation}
        setCurrentValue={props.setOperation}
        values={operations} />
      <SelectInput label="Maximum Number"
        id="max-number"
        currentValue={props.maxNumber}
        setCurrentValue={props.setMaxNumber}
        values={numbers} />
    </main>
  )
}
export default Main;
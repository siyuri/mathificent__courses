
import React, { Fragment } from 'react';

function SelectInput({ label, id, values, currentValue, setCurrentValue }) {
  // Outside of the return statement in SelectInput, use the Array.map() method to generate a list of option elements. This same statement will be used by both of our dropdown boxes, as well as any future ones that we might add

  const selectOptions = values.map((e) =>
    <option e={e} key={e.toString()}>{e}</option>)
  console.log(selectOptions)
  return (
    <>
      {/* Replace the hard-coded id and label with the prop values */}
      <label htmlFor={id}>{label}</label>
      {/* Change the id of the select to the id passed from the parent: */}
      <select id={id}
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}>
        {selectOptions}
      </select><br />
    </>
  )
}
export default SelectInput;
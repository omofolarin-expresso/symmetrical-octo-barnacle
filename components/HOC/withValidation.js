import React, { useState } from 'react';

// Finish the withValidation HOC located in components/withValidation.js. 
// This component should take a Wrapped component and an array of validators and 
// create a component with validateOnChange function passed down as a prop. 
// This function should validate the received values using all of the validators (check model/Validators.js as an example) and 
// pass down a list of encountered errors to the Wrapped component. 
// The new component should also accept the onChanged prop that would be used to notify the parent about the changed value along with its current validation status.

const withValidation = (Wrapped, validators) => {
  const t = ({props, onChanged}) => {
    const err = []
    const validateOnChange = val => {
      var status = true
      err.length = 0
      validators.map(v => {
        const e = v(val)
        if (!e.isValid) {
          err.push(e.message)
          status = e.isValid
        }
      })
      onChanged(val, status)
    }
    return (
      <Wrapped
        errors={err}
        validateOnChange={(v) => validateOnChange(v)}
        onChanged={onChanged}
        {...props}
      />
    )
  }
  return t
};

export default withValidation;

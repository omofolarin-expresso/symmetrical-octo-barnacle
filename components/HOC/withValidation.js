import React from 'react';

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

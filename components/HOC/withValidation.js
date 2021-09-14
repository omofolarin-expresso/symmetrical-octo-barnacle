import React from 'react';

let error = []
const withValidation = (Wrapped, validators) => (props) => {
    const validate = (input) => {
        for (let i = 0; i < validators.length; i++) {
            if (!validators[i](input).isValid) {
                error[0] = validators[i](input).message
                return false
            }
        }
        error.length = 0
        return true
    }

    return (
        <>
            <Wrapped
                {...props}
                validateOnChange={(text) => props.onChanged(text, validate(text))}
                errors={error}
            />
        </>
    )
};

export default withValidation;

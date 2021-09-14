import React from 'react';
import { Text } from 'react-native';

const withValidation = (Wrapped, validators) => (props) => {
    const errors = []
    for (let i = 0; i < validators.length; i++) {
        if (!validators[i](props.value).isValid) {
            errors.push(validators[i](props.value).message)
            return (
                <>
                    <Wrapped
                        {...props}
                        isValid={validators[i](props.value).isValid}
                        validateOnChange={props.onChanged}
                        errors={errors}
                    />
                    {!!props.value.length && <Text style={{color: 'red'}}>{validators[i](props.value).message}</Text>}
                </>
            )
        } 
    }
    return (
        <Wrapped
            {...props} isValid={true}
            validateOnChange={props.onChanged}
            errors={errors}
        />
    )
};

export default withValidation;

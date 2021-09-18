import React from 'react';

const withValidation = (Wrapped, validators) => (props) => {
    const { onChanged, label, value } = props;
    return (
        <Wrapped 
        validateOnChange={(text)=>{
            const res = validators.map((func)=>func(text)).find((a)=>a.isValid === false);
            const bool = !res ? true : false;
            onChanged(text, bool);
        }}
        label={label}
        value={value}
        />
    );
};

export default withValidation;

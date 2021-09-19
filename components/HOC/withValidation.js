import React from 'react';

const withValidation = (Wrapped, validators) => (props) => {
    const [errors, setErrors] = React.useState([]);
    const { onChanged, label, value } = props;
    return (
        <Wrapped 
        validateOnChange={(text)=>{
            const all = validators.map((func)=>func(text));
            const res = all.find((a)=>a.isValid === false);
            const bool = !res ? true : false;
            onChanged(text, bool);
            setErrors(all.map(i=>i?.message).filter(a=>a));
        }}
        label={label}
        value={value}
        errors={errors}
        />
    );
};

export default withValidation;

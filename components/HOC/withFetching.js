import React from 'react';

const withFetching = (Wrapped, Loading, loader) => (props) => {
    const [loading, setLoading] = React.useState(false);
    const [payload, setPayload] = React.useState(null);
    React.useEffect(()=>{
        setLoading(true);
        loader(props)
        .then((data)=>{
            console.log('data', data)
            setPayload(data);
            setLoading(false);
        })
        .catch(err=>console.log(err));
    }, []);
    if (loading) {
        return <Loading />
    }
    return (
        <Wrapped 
        {...props}
        payload={payload}
        />
    )
};

export default withFetching;

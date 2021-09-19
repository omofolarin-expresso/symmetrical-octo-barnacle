import React from 'react';

const withFetching = (Wrapped, Loading, loader) => (props) => {
    const [loading, setLoading] = React.useState(true);
    const [payload, setPayload] = React.useState(null);
    React.useEffect(()=>{
        setLoading(true);
        (async () => {
            const data = await loader(props);
            setLoading(false);
            setPayload(data);
        })();
    }, []);
    const Load = !payload ? <Loading /> : null;
    if (!payload && loading) {
        return Load;
    }
    if (payload && !loading) {
        return (
            <Wrapped 
            {...props}
            reload={async ()=>{
                setLoading(true);
                const data = await loader(props);
                setLoading(false);
                setPayload(data);
            }}
            payload={payload}
            />
        )
    }
    return null;
};

export default withFetching;

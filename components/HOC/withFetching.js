import React from 'react';

const withFetching = (Wrapped, Loading, loader) => (props) => {
    if (loader) return <Loading />
    return <Wrapped {...props} />
};

export default withFetching;

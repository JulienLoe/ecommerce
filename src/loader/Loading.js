import React from 'react';

const Loading = () => {
    return (
        <div className='container'>
            <div className='wrapperLoader'>
            <div className='loader' style={{'--load': -1}}><div className='bubble'></div></div>
            <div className='loader' style={{'--load': -2}}><div className='bubble'></div></div>
            <div className='loader' style={{'--load': -3}}><div className='bubble'></div></div>
            <div className='loader' style={{'--load': -4}}><div className='bubble'></div></div>
            <div className='loader' style={{'--load': -5}}><div className='bubble'></div></div>
            <div className='loader' style={{'--load': -6}}><div className='bubble'></div></div>
            <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
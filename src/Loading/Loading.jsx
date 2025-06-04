import React from 'react';

const Loading = () => {
    return (
        <div className='fixed left-0 top-0 w-full h-screen bg-amber-50 flex justify-center items-center z-9999'>
            <span className="loading loading-spinner text-accent"></span>
        </div>
    );
};

export default Loading;
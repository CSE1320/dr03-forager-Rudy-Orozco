import React from 'react';

const Report = () => {
    return (
        // Static Report Button
        <div className="w-35 h-8 bg-red-500 pl-2 rounded-xl flex items-center justify-center text-white">
            <p className="text-sm font-normal whitespace-nowrap">Report Error</p>
            <img src="/back.svg" alt="arrow" className="w-5 rotate-180" />
        </div>
    );
};

export default Report;
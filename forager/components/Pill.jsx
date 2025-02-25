'use client';
import React, { useState } from 'react';

const Pill = ({ pill }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`inline-flex px-[17px] rounded-[100px] justify-center cursor-pointer transition-colors
                ${isActive ? "bg-[#579076]" : "bg-[#D9D9D9]"}`}
            onClick={() => setIsActive(!isActive)}
        >
            <p className={`text-[16px] font-[400] ${isActive ? "text-[#FFF]" : "text-[#7C7C7C]"}`}>
                {pill}
            </p>
        </div>
    );
};

export default Pill;

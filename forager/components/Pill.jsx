'use client';
import React from 'react';

const Pill = ({ pill, isSelected, toggleFilter }) => {
    return (
        // Pill Color
        <div
            className={`inline-flex px-4 rounded-2xl justify-center cursor-pointer transition-colors
                ${isSelected ? "bg-[#579076]" : "bg-[#D9D9D9]"}`}
            onClick={() => toggleFilter(pill)} 
        >
            {/* Pill Name */}
            <p className={`text-[16px] font-[400] ${isSelected ? "text-[#FFF]" : "text-[#7C7C7C]"}`}>
                {pill}
            </p>
        </div>
    );
};

export default Pill;

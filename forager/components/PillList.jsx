import React from 'react';
import Pill from "./Pill";

const PillList = ({ filterType }) => {
    return (
        <div className="w-[321px]">
            <h1 className='text-[#000] text-[24px] font-[700] mt-[22px]'>{filterType.name}</h1>
            <div className="flex flex-wrap gap-2 mt-[10px]">
                {filterType.pills.map((pill, index) => (
                    <Pill key={index} pill={pill} />
                ))}
            </div>
        </div>
    );
};

export default PillList;
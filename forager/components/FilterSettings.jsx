import React from 'react';
import PillList from "./PillList";

const FilterSettings = ({ Filters }) => {
    return (
        <div className="mt-5 w-full sm:w-[380px] h-[806px] flex-shrink-0 bg-[#F2F2F2] rounded-[20px] relative ">
            <h1 className='text-[#000] text-center text-[16px] sm:text-[20px] font-[700] mt-[22px]'>FILTER</h1>
            <img src="exitX.svg" className="absolute top-[19px] right-[21px] cursor-pointer" />
            <div className='items-center flex flex-col gap-4 mt-4'>
                {Filters.Type.map((filterType, index) => (
                    <PillList key={index} filterType={filterType} />
                ))}
            </div>
        </div>
    );
};

export default FilterSettings;

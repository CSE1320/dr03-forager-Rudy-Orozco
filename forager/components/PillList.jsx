import React from 'react';
import Pill from "./Pill";

const PillList = ({ filterType, selectedFilters, toggleFilter }) => {
    return (
        <div className="w-80"> 
            {/* Filter Section */}
            <h1 className="text-black text-2xl font-bold mt-6">{filterType.name}</h1> 
            <div className="flex flex-wrap gap-2 mt-2.5">
                {/* Pass filter data to each pill */}
                {filterType.pills.map((pill, index) => (
                    <Pill 
                        key={index} 
                        pill={pill.name} 
                        isSelected={selectedFilters.includes(pill.name)} 
                        toggleFilter={toggleFilter} 
                    />
                ))}
            </div>
        </div>
    );
};

export default PillList;

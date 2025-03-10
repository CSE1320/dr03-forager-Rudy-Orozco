import React from 'react';
import PillList from "./PillList";

const FilterSettings = ({ Filters, selectedFilters, setSelectedFilters, onClose }) => {

    // Toggle a pill in the selected filters
    const toggleFilter = (pillName) => {
        setSelectedFilters(prev =>
            prev.includes(pillName)
                ? prev.filter(f => f !== pillName) // Remove if already selected
                : [...prev, pillName] // Add if not selected
        );
    };

    return (
        <div className="mt-5 w-[380px] h-[806px] flex-shrink-0 bg-gray-100 rounded-2xl relative">
            {/* Header */}
            <h1 className='text-black text-center text-xl sm:text-2xl font-bold pt-5'>
                FILTER
            </h1>

            {/* Exit Button */}
            <img 
                src="exitX.svg" 
                className="absolute top-5 right-5 cursor-pointer"
                onClick={onClose}
            />
            
            {/* List of Pills */}
            <div className='flex flex-col items-center gap-4 mt-4'>
                {Filters.Type.map((filterType, index) => (
                    <PillList 
                        key={index}
                        filterType={filterType} 
                        selectedFilters={selectedFilters}
                        toggleFilter={toggleFilter}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterSettings;

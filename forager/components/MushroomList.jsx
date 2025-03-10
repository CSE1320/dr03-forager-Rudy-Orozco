'use client';
import React from 'react';
import MushroomCard from './MushroomCard';
import { useState, useEffect } from 'react';

const MushroomList = ({mushroom, selected}) => {
    const [selectedMushroom, setSelectedMushroom] = useState(null);
    
    // Load from localStorage on mount    
    const handleSelectMushroom = (mushroom) => {
        setSelectedMushroom(mushroom);
        localStorage.setItem('selectedMushroom', JSON.stringify(mushroom));
    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 p-4 place-items-center">
                {/* Load each mushroom with specified data */}
                {mushroom.length > 0 ? (
                    mushroom.map((el, index) => (
                    <MushroomCard key={index} mushroom={el} onSelect={handleSelectMushroom} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-3">No mushrooms found</p>
                )}
            </div>
        </div>
    );
};

export default MushroomList;
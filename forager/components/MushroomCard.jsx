'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

const MushroomCard = ({ mushroom, onSelect }) => {
  const pathname = usePathname(); // Use usePathname to get the current page URL

  // Check if we are on the /mushroom page
  const isOnMushroomPage = pathname === '/mushroom';

  return (
    <div onClick={() => onSelect(mushroom)}>
      <Link href={`/mushroom?name=${encodeURIComponent(mushroom.name)}`}>
        <div className="w-[100px] h-[160px] flex-shrink-0">
          <div className="relative bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[101px] h-[127px]">
            
            {/* The mushroom image */}
            <img 
              src={mushroom.picture} 
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[94px] h-[103px] object-cover"
            />

            <div className="absolute top-2 left-2 flex items-center space-x-1">
              {/* Render the red box and caution symbol only if on the /mushroom page */}
              {isOnMushroomPage && (
                <div className={`w-8 h-5 rounded-md flex items-center justify-center ${mushroom.edible ? 'bg-[rgba(115,216,159,0.90)]' : 'bg-[#F66]'}`}>
                    <p className='text-white text-xs'>
                        {`${(mushroom.match * 100).toFixed(0)}%`}
                    </p>
                </div>
              )}

              {/* Caution symbol for toxic mushrooms */}
              {!mushroom.edible && (
                <img 
                  src="caution.svg" 
                  alt="Toxic Mushroom Warning"
                />
              )}
            </div>
          </div>

          {/* Mushroom name */}
          <h1 className="whitespace-nowrap flex justify-center text-[#203B5F] text-center font-nunito text-[16px] font-normal leading-normal w-[97px] h-[22px] flex-shrink-0 translate-y-[35%]">
            {mushroom.name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default MushroomCard;

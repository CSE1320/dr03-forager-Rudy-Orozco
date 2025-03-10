'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Report from "./Report";
import MushroomList from "./MushroomList";
import { mushrooms } from '../data/development'; // Adjust the path as necessary
import { warningMessage } from '../data/development';
import Message from "../components/Message";

const MushroomMatch = ({ mushroom }) => {
  // State to track the favorite status, initializing from localStorage if available
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedMushroom = localStorage.getItem(mushroom.name);
    return savedMushroom ? JSON.parse(savedMushroom).favorite : false;
  });
  
  const [showMessage, setShowMessage] = useState(false);

  // Toggle favorite status and save it to localStorage
  const handleFavoriteToggle = () => {
    const updatedMushroom = { ...mushroom, favorite: !isFavorite };
    localStorage.setItem(mushroom.name, JSON.stringify(updatedMushroom));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="h-[838px] w-[294px]">
      {/* Report Button */}
      <div className="flex items-center justify-between mb-3">
        <p>Not what you expected?</p>
        <Report />
      </div>

      {/* Conditionally Render the Warning Only if Mushroom is Toxic */}
      {!mushroom.edible && (
        <Message msg={warningMessage.warning} />
      )}

      <div className='mt-5'>
        {/* Compare button */}
        <div className='flex items-center justify-end'>
          <Link href='/comparison'>
            <p className='mr-2 text-[#888787]'>Compare</p>
          </Link>
          <img src='/comparearrow.svg' alt='Compare Arrow' />
        </div>

        <div className="relative bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[290px] h-[290px]">
          {/* Render skull only if the mushroom is NOT edible */}
          {!mushroom.edible && (
            <img src='/skull.png' className='w-[17px] h-[22px] absolute top-1 left-3' />
          )}

          {/* Match Box - Green for edible, Red for toxic */}
          <div
            className={`w-[100px] h-[24px] absolute top-1 ${
              mushroom.edible ? 'bg-[#579076]' : 'bg-[#FF5050]'
            } ${mushroom.edible ? 'left-3' : 'left-9'} rounded-lg flex items-center justify-center`}
          >
            {/* Render caution icon only if NOT edible */}
            {!mushroom.edible && <img src='/cautionwhite.svg' className='w-[14px] h-[18px] mr-1' />}
            <p className="text-white text-xs whitespace-nowrap">{`${(mushroom.match * 100).toFixed(0)}%`} Match</p>
          </div>

          {/* Mushroom Image */}
          <img
            src={mushroom.picture}
            className="absolute object-cover w-[267px] h-[210px] mt-8 left-3 aspect-89/70"
            alt={mushroom.name}
          />
        </div>
      </div>

      {/* Mushroom Name */}
      <div className="flex items-center justify-between mt-5">
        <div>
          <h1 className="text-4xl">{mushroom.name}</h1>
          <p className="text-xl">
            {mushroom.scientific}
          </p>
        </div>

        {/* Favorite Button */}
        <button onClick={handleFavoriteToggle}>
          <img src={isFavorite ? "/star.svg" : "/plus.svg"} alt="Favorite" className={isFavorite ? 'w-[50px]' : ""} />
        </button>
      </div>

      {/* Fast Facts */}
      <div className="relative w-[290px] h-[168px] flex-shrink-0 bg-[#8E4A49] mt-2 rounded-3xl">
        <div className="absolute text-white mt-4 ml-5">
          <p className="text-[20px] font-[700]">Fast Facts</p>
          <p>Cap Diameter: {mushroom.capdiam}</p>
          <p>Gill Color: {mushroom.GillsColor}</p>
          <p>Stem Color: {mushroom.StemColor}</p>
          <p>Habitat: {mushroom.Habitat}</p>
        </div>
      </div>

      {/* Description Placeholder */}
      <p className='mt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
      </p>

      <div className="flex items-center justify-center mt-6">
        <h1 className="text-[#324053] text-center font-nunito text-2xl font-md mt-6">
          Similar Matches
        </h1>
        <button onClick={() => setShowMessage(true)} className="ml-2 focus:outline-none">
          <img src="/Group.svg" alt="info" className='mt-6 ml-2'></img>
        </button>
      </div>

      {/* Message Popup */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative rounded-lg shadow-lg w-[300px] text-left">
            {/* Info Button & Pop-up */}
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={() => setShowMessage(false)}>
              <img src='exitX.svg' alt='exit' className='filter invert' />
            </button>
            <Message msg={warningMessage.info} />
          </div>
        </div>
      )}

      {/* Mushroom List */}
      <MushroomList mushroom={mushrooms.mushroom.filter(m => m !== mushroom)} />
      <div className='h-40' />
    </div>
  );
};

export default MushroomMatch;

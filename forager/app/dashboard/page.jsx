'use client';
import MushroomCard from '@/components/MushroomCard';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import Search from '../../components/Search'; // Adjust the path as necessary
import FilterSettings from "../../components/FilterSettings";
import { mushrooms, Filter } from '../../data/development'; // Adjust the path as necessary
import { useState } from 'react';

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMushrooms = mushrooms.mushroom.filter(el =>
    el.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* <div className="absolute inset-0 bg-black opacity-50 z-50" /> */}
      <div className="min-h-screen bg-[#397367] flex flex-col items-center font-nunito relative">
  
        {/* Hi Chantelle & Mushroom Icon */}
        <img src="/mushroom.svg" alt="Mushroom Icon" className="absolute right-0"/>
        <h2 className="absolute top-[59px] left-[29px] text-white text-[24px] font-[500]">Hi,</h2>
        <h2 className="absolute top-[75px] left-[29px] text-white text-[45px] font-[800]">Chantelle!</h2>
        
        {/* White Box Portion */}
        <div className="bg-[#F2F2F2] rounded-[41px] mt-[161px] w-full sm:w-[90%] max-w-[500px] mx-auto shadow-lg flex-grow z-0">
          {/* Search Bar and Filter Icon (TO BE ADDED) */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

          {/* My Collection */}
          <p className="text-left mt-[35px] ml-[39px] text-black text-[25px] font-[700] nunito-text">My Collection</p>

          {/* Grid for Mushrooms */}
          <div className="grid grid-cols-3 gap-4 p-4 place-items-center">
            {filteredMushrooms.length > 0 ? (
              filteredMushrooms.map((el, index) => (
                <MushroomCard key={index} mushroom={el} />
              ))
            ) : (
              <p className="text-gray-500 col-span-3">No mushrooms found</p>
            )}
          </div>
        </div>

        {/* NavBar */}
        <div className="w-full">
          <NavBar />
        </div>
      </div>
      
      {/* FilterSettings */}
      {/* <div className="page flex justify-center items-center flex-col sm:flex-row w-full px-4 absolute top-0 z-50">
        {/* <FilterSettings Filters={Filter} /> */}
      {/* </div> */}
    </div>
  );
}


/** TODO: 
 * - Add Card Press Functionality
 * - Add Filter Functionality
 * - Fix NavBar Icon
 * 
 * DONE:
 * - Card Components
 * - Search Bar & Functionality
 * - NavBar Component
 * - Special Icons
*/
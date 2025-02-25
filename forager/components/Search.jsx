'use client';
import React from 'react';
import {FaSearch} from "react-icons/fa";

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="flex w-full">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 h-[39px] mt-[29px] ml-[24px] w-[329px]">
            <FaSearch className="text-gray-500 ml-2" />
            <input 
              type="text" 
              placeholder="Search for a mushroom..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 focus:outline-none text-gray-400 text-[16px]"
            />
          </div>
          {/* Filter Icon*/}
          <img src="/filter.svg" className="flex w-[19.336px] h-[21.73px] ml-[13px] mt-[39px] mr-[0px]"/>
        </div>
    );
};

export default Search;
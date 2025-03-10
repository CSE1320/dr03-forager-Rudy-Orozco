'use client';
import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = ({ searchTerm, setSearchTerm, onFilterClick }) => {
    return (
        <div className="flex w-full">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 h-[39px] mt-7 ml-7 w-[329px]">
            <FaSearch className="text-gray-500 ml-2" />
            <input 
              type="text" 
              placeholder="Search for a mushroom..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 focus:outline-none text-gray-400 text-[16px]"
            />
          </div>
          {/* Filter Icon */}
          <img 
            src="/filter.svg" 
            className="w-[19.336px] h-[21.73px] ml-3 mt-10 cursor-pointer"
            onClick={onFilterClick}
          />
        </div>
    );
};

export default Search;

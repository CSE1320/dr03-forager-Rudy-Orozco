'use client';
import { useState, useEffect } from 'react';
import MushroomCard from '@/components/MushroomCard';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';
import FilterSettings from "../../components/FilterSettings";
import Pill from '../../components/Pill';
import { mushrooms, Filter } from '../../data/development';

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedMushroom, setSelectedMushroom] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedMushroom = localStorage.getItem('selectedMushroom');
    if (savedMushroom) {
      setSelectedMushroom(JSON.parse(savedMushroom));
    }
  }, []);

  // Function to select a mushroom and save to localStorage
  const handleSelectMushroom = (mushroom) => {
    setSelectedMushroom(mushroom);
    localStorage.setItem('selectedMushroom', JSON.stringify(mushroom));
  };

  // Toggle filter implementation
  const toggleFilter = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  // Filter mushrooms
  const filteredMushrooms = mushrooms.mushroom.filter(mushroom => {
    const matchesSearch = mushroom.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.some(filter => {
      if (filter === 'Favorites' && mushroom.favorite) return true;
      if (filter === mushroom.region) return true;
      if (filter === mushroom.category) return true;
      return false;
    });
  
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-[#397367] flex flex-col items-center font-nunito relative">
      {/* Top Heading */}
      <img src="/mushroom.svg" alt="Mushroom Icon" className="absolute right-0" />
      <h2 className="absolute top-[3.5rem] left-[1.5rem] text-white text-[24px] font-[500]">Hi,</h2>
      <h2 className="absolute top-[4.5rem] left-[1.5rem] text-white text-[45px] font-[800]">Chantelle!</h2>
  
      {/* White Box */}
      <div className="bg-[#F2F2F2] rounded-[41px] mt-[16vh] w-full sm:w-[90%] max-w-[500px] mx-auto shadow-lg flex-grow z-0">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onFilterClick={() => setIsFilterVisible(true)} />
        <p className="text-left mt-[2.2rem] ml-[2.4rem] text-black text-[25px] font-[700]">My Collection</p>

        {/* Applied Filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap p-2 ml-7">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter, index) => (
                <Pill
                  key={index}
                  pill={filter}
                  isSelected={true}
                  toggleFilter={toggleFilter} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Grid for Mushrooms */}
        <div className="grid grid-cols-3 gap-4 p-7 place-items-center">
          {filteredMushrooms.length > 0 ? (
            filteredMushrooms.map((el, index) => (
              <MushroomCard key={index} mushroom={el} onSelect={handleSelectMushroom} />
            ))
          ) : (
            <p className="text-gray-500 col-span-3">No mushrooms found</p>
          )}
        </div>
      </div>
  
      {/* NavBar */}
      <div className="w-full">
        <NavBar selectedMushroom={selectedMushroom} />
      </div>
  
      {/* Filter */}
      {isFilterVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <FilterSettings 
              Filters={Filter} 
              selectedFilters={selectedFilters} 
              setSelectedFilters={setSelectedFilters} 
              onClose={() => setIsFilterVisible(false)} 
              toggleFilter={toggleFilter}
            />
          </div>
        </div>
      )}
    </div>
  );
}
'use client';
import NavBar from '../../components/NavBar';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mushrooms } from '../../data/development';
import ComparisonTable from '../../components/ComparisonTable';
import Link from 'next/link';

export default function MushroomComparisonPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  
  // Load from localStorage on mount
  useEffect(() => {
    const storedMushroom = localStorage.getItem('selectedMushroom');
    const defaultMushroom = mushrooms.mushroom.find(m => m.name === 'Death Cap'); // SET DEATHCAP TO DEFAULT IF NO OTHER MUSHROOMS WERE SELECTED

    // Get mushroom name
    if (name) {
      const foundMushroom = mushrooms.mushroom.find(m => m.name === decodeURIComponent(name));
      if (foundMushroom) {
        setSelectedMushroom(foundMushroom);
        localStorage.setItem('selectedMushroom', JSON.stringify(foundMushroom));
      }
    } else if (storedMushroom) {
      setSelectedMushroom(JSON.parse(storedMushroom));
    } else {
      setSelectedMushroom(defaultMushroom);
    }
  }, [name]);

  if (!selectedMushroom) {
    return <p className="text-center text-red-500">Mushroom not found</p>;
  }

  return (
    <div className="page ">
      <div className="w-full h-28 bg-[#579076] sticky top-0 z-10 rounded-b-3xl flex items-center justify-center relative">
        {/* Back Button */}
        <Link href={`/mushroom?name=${encodeURIComponent(selectedMushroom.name)}`} className="absolute left-4 cursor-pointer mt-9">
          <img src="/back.svg" alt="Back"/>
        </Link>
        <h1 className="text-white text-[32px] mt-11">Compare</h1>
      </div>

      {/* Compare Table */}
      <div className="flex flex-col items-center justify-center">
        <ComparisonTable mushroom={selectedMushroom} />
        <NavBar />
      </div>
    </div>
  );
}

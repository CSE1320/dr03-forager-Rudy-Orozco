'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mushrooms, warningMessage } from '../../data/development';
import NavBar from '../../components/NavBar';
import Message from '../../components/Message';
import MushroomMatch from '../../components/MushroomMatch';
import Link from 'next/link';

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const storedMushroom = localStorage.getItem('selectedMushroom');
    const defaultMushroom = mushrooms.mushroom.find(m => m.name === 'Death Cap');

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

  // One time pop-up logic
  useEffect(() => {
    if (selectedMushroom) {
      const warningSeen = sessionStorage.getItem('warningSeen');
      if (!warningSeen) {
        setShowWarning(true);
      }
    }
  }, [selectedMushroom]);

  const closeWarning = () => {
    setShowWarning(false);
    sessionStorage.setItem('warningSeen', 'true');
  };

  if (!selectedMushroom) {
    return <p className="text-center text-red-500">Mushroom not found</p>;
  }

  return (
    <div className="h-[1800px] bg-[#F2F2F2]">
      
      {/* One-Time Warning Pop-Up */}
      {showWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative rounded-lg shadow-lg w-[300px] text-left">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black"onClick={closeWarning}>
              <img src='exitX.svg' alt='exit' className='filter invert'/>
            </button>
            <Message msg={warningMessage.attention} />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="w-full h-[117px] bg-[#579076] sticky top-0 z-10 rounded-b-3xl flex items-center justify-center relative">
        <Link href="/dashboard" className="absolute left-4 cursor-pointer mt-10">
          <img src="/back.svg" alt="Back" />
        </Link>
        <h1 className="text-white text-[32px] mt-10">Match Results</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-screen mt-3">
        <MushroomMatch mushroom={selectedMushroom} className="items-center" />
        <NavBar />
      </div>
    </div>
  );
}

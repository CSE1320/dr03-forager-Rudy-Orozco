import React from 'react';
import Link from 'next/link';

const BackgroundScreen = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50">
          {/* Background Image */}
          <img src="/userphoto.png" alt="user photo" className="w-full h-full object-cover" />

          {/* Back Button */}
          <div className="absolute top-0 left-0 w-full h-[132px] bg-[rgba(0,0,0,0.50)] flex items-center px-[25px]">
            <Link href="/dashboard"  className="absolute left-4 cursor-pointer">  
              <img src="back.svg" alt="back button" className="w-[31px] mt-8" />
            </Link>
            <img src="flash.svg" alt="flash button" className="w-[31px] h-[36px] ml-auto mt-8" />
          </div>

          {/* Bottom Half */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[248px] h-[248px] border-2 border-white" />
          <div className="absolute bottom-0 left-0 w-full h-[132px] bg-[rgba(0,0,0,0.50)] flex items-center px-[52px]">
            <img src="album.svg" alt="album" className="h-[50px]" />
            <div className="relative flex justify-center items-center w-full">
              {/* "Capture" Button */}
              <Link href={`/mushroom?name=${encodeURIComponent("Death Cap")}`} className="inline-flex justify-center items-center">
                <img src="ellipse1.svg" alt="ellipse1" className="" />
                <img src="ellipse2.svg" alt="ellipse2" className="absolute" />
              </Link>
            </div>
            <img src="flip.svg" alt="flip" className="h-[40px] ml-auto" />
          </div>
      </div>
    );
};

export default BackgroundScreen;
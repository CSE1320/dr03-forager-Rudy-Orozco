import React from 'react';
import Table from './Table';
import {warningMessage} from '../data/development';
import Message from "../components/Message";

const ComparisonTable = ({ mushroom }) => {
    return (
      <div className="flex flex-col gap-4 items-center">
        {/* Conditionally Render the Warning Only if Mushroom is Toxic */}
        {!mushroom.edible && (
          <div className="rounded-2xl text-sm w-[290px] h-[90px] font-medium text-white px-4 py-2 mt-5">
            <Message msg={warningMessage.warning} />
          </div>
        )}

        {/* Picture Container */}
        <div className="flex gap-4 justify-center">
          {/* Picture 1 - User's Photo */}
          <div className="w-[163px] flex flex-col items-center">
            <div className="relative bg-white shadow-md w-[163px] h-[251px]">
              <img
                src="/image.png"
                alt="Your Photo"
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-[193px] object-cover"
              />
            </div>
            <h1 className="whitespace-nowrap text-[#203B5F] text-center font-nunito text-2xl font-normal mt-2">
              Your Photo
            </h1>
          </div>

          {/* Picture 2 - Mushroom */}
          <div className="w-[163px] flex flex-col items-center">
            <div className="relative bg-white shadow-md w-[163px] h-[251px]">
              {/* Mushroom Image */}
              <img
                src={mushroom.picture}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-[193px] object-cover"
              />

              {/* Skull Icon for Toxic Mushrooms */}
              {!mushroom.edible && (
                <img
                  src="skull.png"
                  className="absolute top-2 left-2 w-4"
                  alt="Toxic Mushroom Warning"
                />
              )}

              {/* Match Box */}
              <div
                className={`w-[100px] h-[24px] mt-2 rounded-lg flex items-center justify-center
                  ${mushroom.edible ? 'bg-[#579076] ml-2' : 'bg-[#FF5050] ml-7'} `
                }
              >
                {/* Caution Icon for Non-Edible */}
                {!mushroom.edible && <img src='/cautionwhite.svg' className='w-[14px] h-[18px] mr-1' />}
                <p className="text-white text-xs whitespace-nowrap">{`${(mushroom.match * 100).toFixed(0)}%`} Match</p>
              </div>
            </div>
            <h1 className="whitespace-nowrap text-[#203B5F] text-center font-nunito text-2xl font-normal mt-2">
              {mushroom.name}
            </h1>
          </div>
        </div>

        {/* Compare Table */}
        <Table mushroom={mushroom} />
        <div className='h-40'/>
      </div>
    );
};

export default ComparisonTable;
import React from 'react';

const MushroomCard = ({mushroom}) => {
    return (
        <div className="w-[100px] h-[160px] flex-shrink-0">
            <div className="relative bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[101px] h-[127px]">
                <img src={mushroom.picture} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[94px] h-[103px] object-cover"/>
                {!mushroom.edible && (
                    <img 
                        src="caution.svg" 
                        className="absolute top-[7px] left-[9px]"
                        alt="Toxic Mushroom Warning"
                    />
                )}
            </div>

        <h1 className="whitespace-nowrap flex justify-center text-[#203B5F] text-center font-nunito text-[16px] font-normal font-normal leading-normal w-[97.576px] h-[22.518px] flex-shrink-0 translate-y-[35%]">
            {mushroom.name}
        </h1>
        </div>
    );
};



export default MushroomCard;
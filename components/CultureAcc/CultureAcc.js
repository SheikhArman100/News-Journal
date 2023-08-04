"use client";
import React, { useState } from "react";


const CultureAcc = ({children}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`w-full relative flex flex-col ${isActive?"h-full":""}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-black">
        <h2 className="text-3xl lg:text-4xl  italic font-medium  ">Culture</h2>
        <button
          className="relative h-6 aspect-square flex flex-col items-center justify-center border-2 border-black rounded-full gap-y-1"
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`absolute w-0.5 h-3 transition-transform bg-black ${
              isActive ? "transform rotate-90" : ""
            }`}
          />
          <div className="absolute w-0.5 h-3 transform rotate-90  bg-black" />
        </button>
      </div>
      {isActive && (
        <>{children}</>
      )}
    </div>
  );
};

export default CultureAcc;

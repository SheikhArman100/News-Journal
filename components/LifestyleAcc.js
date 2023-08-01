import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const LifestyleAcc = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-black">
        <div className="w-full text-center">
            <h2 className="text-3xl lg:text-4xl  italic font-medium  ">Life Style</h2>
        </div>
        <AiOutlinePlusCircle size={24} />
      </div>
    </div>
  );
};

export default LifestyleAcc;

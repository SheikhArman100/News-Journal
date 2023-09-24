import NewsCard from "@/components/NewsCard";
import React from "react";

const LifestyleSkeleton = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6 ">
      {[...Array(8).keys()].map((i) => (
        <NewsCard key={i}>
          <NewsCard.Container style="w-full aspect-[2/2.1] h-full sm:aspect-[2/0.8]  sm:flex sm:odd:flex-row-reverse sm:gap-x-2">
            <div className="w-full h-[70%] sm:w-1/2 sm:h-full  bg-gray-300" />
            
            <NewsCard.Info style="w-full h-4  bg-gray-300 rounded mt-4" />
            
            
          </NewsCard.Container>
        </NewsCard>
      ))}
    </div>
  );
};

export default LifestyleSkeleton;

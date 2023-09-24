import NewsCard from "@/components/NewsCard";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6 py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]">
      {[...Array(10).keys()].map((i) => (
         <NewsCard key={i} >
              <NewsCard.Container style="flex flex-col flex-shrink-0 gap-y-1 col-span-1 aspect-[1.5/2] md:aspect-square h-full">
                <div
                  
                  className="w-full h-[50%] lg:h-[60%] bg-gray-200"
                />
                <NewsCard.Info style="w-full h-[50%] lg:h-[40%] "/>
                    
                
                  
                
              </NewsCard.Container>
            </NewsCard>
      ))}
      
    </div>
  );
};

export default Loading;

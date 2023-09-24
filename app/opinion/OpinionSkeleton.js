import NewsCard from '@/components/NewsCard'
import React from 'react'

const OpinionSkeleton = () => {
  return (
     <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6 '>
        {[...Array(8).keys()].map((i) => (
         <NewsCard key={i} >
              <NewsCard.Container style="flex flex-col odd:flex-col-reverse flex-shrink-0 gap-y-8 col-span-1 aspect-square h-full">
                <div
                  
                  className="w-full h-[60%]  bg-gray-300"
                />
                <NewsCard.Info style="w-full h-4 flex-[0_0_0%] bg-gray-300"/>
                    
                
                  
                
              </NewsCard.Container>
            </NewsCard>
      ))}
    </div>
  )
}

export default OpinionSkeleton
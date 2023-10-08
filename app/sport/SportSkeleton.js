import NewsCard from '@/components/NewsCard'
import React from 'react'

const SportSkeleton = () => {
  return (
    <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6 '>
        {[...Array(20).keys()].map((i) => (
         <NewsCard key={i} >
              <NewsCard.Container style="flex h-full gap-x-2 w-full aspect-[3/1.2]">
                <div
                  
                  className="w-1/2 h-full bg-gray-300"
                />
                <NewsCard.Info style="w-1/2 h-4  bg-gray-300 rounded"/>
                    
                
                  
                
              </NewsCard.Container>
            </NewsCard>
      ))}
    </div>
  )
}

export default SportSkeleton
import NewsCard from '@/components/NewsCard'
import React from 'react'

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6 py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]'>
        {[...Array(20).keys()].map((i) => (
         <NewsCard key={i} >
              <NewsCard.Container style="flex flex-col odd:flex-col-reverse flex-shrink-0 gap-y-1 col-span-1 aspect-square h-full">
                <div
                  
                  className="w-full h-[60%]  bg-gray-200"
                />
                <NewsCard.Info style=""/>
                    
                
                  
                
              </NewsCard.Container>
            </NewsCard>
      ))}
    </div>
  )
}

export default Loading
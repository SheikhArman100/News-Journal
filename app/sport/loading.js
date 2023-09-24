import NewsCard from '@/components/NewsCard'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6 py-4 md:py-8 px-2 md:px-[3rem] lg:px-[6rem]'>
        {[...Array(20).keys()].map((i) => (
         <NewsCard key={i} >
              <NewsCard.Container style="flex h-full gap-x-2 w-full aspect-[3/1]">
                <div
                  
                  className="w-1/2 h-full bg-gray-200"
                />
                <NewsCard.Info style="w-1/2 h-full"/>
                    
                
                  
                
              </NewsCard.Container>
            </NewsCard>
      ))}
    </div>
  )
}

export default Loading
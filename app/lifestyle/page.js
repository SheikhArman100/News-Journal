import NewsCard from '@/components/NewsCard'
import { getLifestyles } from '@/libs/utils'
import React from 'react'

const Lifestyle = async() => {
  const lifestyles=await getLifestyles()
  
  return (
    <section className='w-full h-full flex flex-col items-center py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]'>
      <h2 className="text-xl md:text-3xl font-bold">Lifestyles</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6'>
         
          {lifestyles.map((lifestyle,index)=>{
            return(
              <NewsCard key={index} >
              <NewsCard.Container style="w-full aspect-[2/2.1] h-full sm:aspect-[2/0.6] lg:aspect-[2/0.8] sm:flex sm:odd:flex-row-reverse sm:gap-x-2">
                <NewsCard.Photo image={lifestyle.image} style="w-full h-[70%] sm:w-1/2 sm:h-full  "/>
                <NewsCard.Info style="w-full h-[30%] sm:h-full">
                  <NewsCard.Title title={lifestyle.title} link={lifestyle.link} />
                  <NewsCard.Details/>
                </NewsCard.Info>

              </NewsCard.Container>

            </NewsCard>
            )
          })}
            
            
           
         </div>


    </section>
  )
}

export default Lifestyle
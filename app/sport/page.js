import NewsCard from '@/components/NewsCard'
import { getSports } from '@/libs/utils'
import React from 'react'

const Sport = async() => {
  const sports=await getSports()
  const sportsWithImage=sports.filter((sport)=>sport.image !=="")
  return (
    <section className='w-full h-full flex flex-col items-center py-4 md:py-8 px-2 md:px-[3rem] lg:px-[6rem]'>
      <h2 className="text-xl md:text-3xl font-bold">Sports</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6'>
         
          {sportsWithImage.map((sport,index)=>{
            return(
              <NewsCard key={index} >
              <NewsCard.Container style="flex h-full gap-x-2 w-full aspect-[3/1]">
                <NewsCard.Photo image={sport.image} style="w-1/2 h-full  "/>
                <NewsCard.Info style='w-1/2 h-full'>
                  <NewsCard.Title title={sport.title} link={sport.link} />
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

export default Sport
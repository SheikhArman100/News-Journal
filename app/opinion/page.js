import NewsCard from '@/components/NewsCard'
import { getOpinions } from '@/libs/utils'
import React from 'react'

const Opinion = async() => {
  const opinions=await getOpinions()
  const opinionsWithImage=opinions.filter((opinion)=>opinion.image !=="")
  return (
    <section className='w-full h-full flex flex-col items-center py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]'>
      <h2 className="text-xl md:text-3xl font-bold">Opinions</h2>

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6'>
         
          {opinionsWithImage.map((opinion,index)=>{
            return(
              <NewsCard key={index} >
              <NewsCard.Container style="flex flex-col odd:flex-col-reverse flex-shrink-0 gap-y-1 col-span-1 aspect-square h-full w-full ">
                <NewsCard.Photo image={opinion.image} style="w-full h-[50%] md:h-[60%] "/>
                <NewsCard.Info style="w-full h-[50%] md:h-[40%]">
                  <NewsCard.Title title={opinion.title} link={opinion.link} style="text-2xl lg:text-3xl line-clamp-3"/>
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

export default Opinion
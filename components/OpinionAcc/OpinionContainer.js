import { getOpinions } from '@/libs/utils'
import React from 'react'
import NewsCard from '../NewsCard'
import Link from 'next/link'
const OpinionContainer =async () => {
    const opinionsWithImage=await getOpinions()
    

  return (
    <div className=' h-full py-2   '>
         <div className='flex flex-col md:grid md:grid-cols-7 md:grid-rows-3 md:gap-x-3 gap-y-2  '>
         
           <NewsCard >
              <NewsCard.Container style="flex flex-col-reverse gap-y-1 md:col-span-2 md:row-span-2 md:flex-col ">
                <NewsCard.Photo image={opinionsWithImage[0].image} style="w-full aspect-[16/8] md:aspect-[16/10] "/>
                <NewsCard.Info>
                  <NewsCard.Title title={`"${opinionsWithImage[0].title}"`} link={opinionsWithImage[0].link} style="text-2xl lg:text-3xl line-clamp-4"/>
                  <NewsCard.Details/>
                </NewsCard.Info>

              </NewsCard.Container>

            </NewsCard>
            <NewsCard >
              <NewsCard.Container style="flex flex-col md:col-span-3 md:row-span-3  md:flex-col-reverse  ">
                <NewsCard.Photo image={opinionsWithImage[1].image} style="w-full aspect-[16/8] md:aspect-[16/10] "/>
                <NewsCard.Info>
                  <NewsCard.Title title={`"${opinionsWithImage[1].title}"`} link={opinionsWithImage[1].link} style="text-2xl lg:text-4xl "/>
                  <NewsCard.Details/>
                </NewsCard.Info>

              </NewsCard.Container>

            </NewsCard>
            <NewsCard >
              <NewsCard.Container style="flex flex-col-reverse md:col-span-2 md:row-span-2  gap-y-1 md:flex-col ">
                <NewsCard.Photo image={opinionsWithImage[2].image} style="w-full aspect-[16/8] "/>
                <NewsCard.Info>
                  <NewsCard.Title title={`"${opinionsWithImage[2].title}"`} link={opinionsWithImage[2].link} style="fir text-2xl lg:text-3xl line-clamp-4"/>
                  <NewsCard.Details/>
                </NewsCard.Info>

              </NewsCard.Container>

            </NewsCard>
            
           
         </div>
         <div className='w-full flex items-center justify-center mt-4 '><Link href="/opinion" className='py-2 px-4 text-sm rounded md:text-base bg-black text-white border hover:border-black hover:text-black hover:bg-white'>See more</Link></div>
         
         

    </div>
  )
}

export default OpinionContainer
import { getSports } from '@/libs/utils'
import React from 'react'
import NewsCard from '../NewsCard'
import Link from 'next/link'

const SportsContainer =async () => {
  const sportsWithImage=await getSports()
   
  return (
    <section className='w-full h-full py-2 '>
      <div className='flex flex-col md:grid md:grid-cols-3 md:gap-x-2 lg:gap-x-4 md:gap-y-4 gap-y-2'>
      
       {[0, 1,2,3,4,5].map((number, index) => (
          <NewsCard key={index}>
            <NewsCard.Container style="flex odd:flex-row-reverse gap-x-2  gap-y-1 md:col-span-1 md:even:flex-col-reverse md:odd:flex-col  ">
              <NewsCard.Photo
                image={sportsWithImage[number].image}
                style="w-[40%] aspect-[16/12] sm:aspect-[16/10] md:w-full  "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={sportsWithImage[number].title}
                  link={sportsWithImage[number].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        ))}
        </div>
        <div className='w-full flex items-center justify-center mt-4 '><Link href="/sport" className='py-2 px-4 text-sm rounded md:text-base bg-black text-white border hover:border-black hover:text-black hover:bg-white'>See more</Link></div>



    </section>
  )
}

export default SportsContainer
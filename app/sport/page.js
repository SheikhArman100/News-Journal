import NewsCard from '@/components/NewsCard'
import { getSports } from '@/libs/utils'
import Link from 'next/link';
import React from 'react'

const Sport = async({ searchParams }) => {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 8;
  const sports=await getSports(page, limit)
  return (
    <section className='w-full h-full flex flex-col items-center py-4 md:py-8 px-2 md:px-[3rem] lg:px-[6rem]'>
      <h2 className="text-xl md:text-3xl font-bold">Sports</h2>

      {sports.length===0?<div className="w-full h-screen flex items-center justify-center">
          <p className="text-base md:text-lg font-semibold text-gray-500">No news found</p>
        </div>:<div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6'>
         
          {sports.map((sport,index)=>{
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
            
            
           
         </div>}
         <div className="w-full  flex items-center justify-center gap-x-3 md:gap-x-6 mt-4 md:mt-8 ">
        <Link
          href={{
            pathname: "/sport",
            query: {
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={`py-2 px-6 bg-black text-white text-sm rounded border hover:border-black hover:bg-white hover:text-black font-semibold ${
            page <= 1 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Prev
        </Link>
        <Link
          href={{
            pathname: "/sport",
            query: {
              page: page + 1,
            },
          }}
          className={`py-2 px-6 bg-black text-white text-sm rounded border hover:border-black hover:bg-white hover:text-black font-semibold ${sports.length===0?"pointer-events-none opacity-50":""}`}
        >
          Next
        </Link>
      </div>


    </section>
  )
}

export default Sport
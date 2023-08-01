import { getOpinions } from '@/libs/utils'
import React from 'react'
import NewsCard from '../NewsCard'
const OpinionContainer =async () => {
    const opinions=await getOpinions()
    const opinionsWithImage=opinions.filter((opinion)=>opinion.image !=="")
    console.log(opinionsWithImage)

  return (
    <div className=' h-full py-2 flex flex-col '>
         <div className='flex flex-col gap-y-2'>
            <NewsCard
          title={`"${opinionsWithImage[0].title}"`}
          link={opinionsWithImage[0].link}
          image={opinionsWithImage[0].image}
          cardStyle="w-full h-full flex flex-col-reverse gap-y-2"
          imageStyle="aspect-[16/10]"
          textStyle="text-xl text-accentColor first-letter:text-7xl"
        />
        <NewsCard
          title={`"${opinionsWithImage[1].title}"`}
          link={opinionsWithImage[1].link}
          image={opinionsWithImage[1].image}
          cardStyle="w-full h-full flex flex-col gap-y-2"
          imageStyle="aspect-[16/10]"
          textStyle="text-xl text-accentColor"
        />
        <NewsCard
          title={`"${opinionsWithImage[2].title}"`}
          link={opinionsWithImage[2].link}
          image={opinionsWithImage[2].image}
          cardStyle="w-full h-full flex flex-col-reverse gap-y-2"
          imageStyle="aspect-[16/10]"
          textStyle="text-xl text-accentColor"
        />
         </div>
         <div></div>

    </div>
  )
}

export default OpinionContainer
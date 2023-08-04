import React from 'react'

const Footer = () => {
  return (
    <div className='p-10 md:p-[5rem] lg:p-[8rem] relative overflow-hidden'>
        <div  className='flex items-center justify-center gap-x-2'>
            <input type='email' placeholder='Enter your email address' className='border-b border-black px-2 py-1 flex-1 text-xs md:text-sm'/>
            <button className='py-2 px-2 md:px-6 bg-black text-white rounded-lg text-xs md:text-sm'>Subscribe</button>
        </div>
        <div className='flex flex-col  text-6xl sm:text-7xl lg:text-8xl xl:text-9xl  font-[800] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] opacity-20'>
            <span className='ml-8 sm:ml-10 leading-12 sm:leading-[3.5rem] lg:leading-[5.5rem] xl:leading-[7rem] lg:ml-12 xl:ml-12'>The</span>
            <span className='leading-3 xl:mr-[2rem]'>Guardian</span>
        </div>

    </div>
  )
}

export default Footer
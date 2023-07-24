//navbutton
"use client"

import { useState } from 'react'


const NavButton = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
    <button onClick={()=>setIsActive(!isActive)} className='md:hidden h-12 aspect-square flex flex-col items-center justify-center bg-gray-300 rounded-full gap-y-1'>
        <div className={`h-[0.15rem] w-6 bg-black transition-transform ${isActive?"transform rotate-45 translate-y-1":""}`}/>
        <div className={`h-[0.15rem] w-6 bg-black transition-transform ${isActive?"transform -rotate-45 -translate-y-0.5":""}`}/>
    </button>
    
    </>
  )
}

export default NavButton
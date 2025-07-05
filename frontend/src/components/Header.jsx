import React from 'react'
import { LuBrain } from "react-icons/lu";

// Here I have defined a simple header for UI purpose and It looks cool to see as a glosy type
function Header() {
  return (
    <nav className='flex flex-col items-center justify-center border border-b-1 border-gray-300 p-4 fixed w-[100%] bg-white/20 backdrop-blur-md h-[15vh] shadow-md'>
      <div className='flex items-center text-2xl'>
        <p className='bg-blue-700 p-2 rounded-xl mr-2'><LuBrain className='text-white'/></p>
        <h1 className='font-bold'>GrowthPro AI</h1>
      </div>
      <p className='mt-2 font-semibold'>Get AI-powered local business insights</p>
    </nav>
  )
}

export default Header
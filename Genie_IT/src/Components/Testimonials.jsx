/* eslint-disable no-unused-vars */
import React from 'react'
import Box from './Box'
// ======================================================
// === importing image assets
// ======================================================
import bonom from "../asset/8.png"

const Testimonials = () => {
  return (
    <div className="bg-gray-800 text-white rounded-[60px]  m-20 h-[420px] z-0 relative ">
    < img 
    src={bonom} 
    alt="bonom image"
    className='absolute  -left-12 -z-10 ml-20' />
    <div className='text-right '> 
      <h2 className="text-[80px] font-bold  mr-16 pt-8 ">Avis des experts</h2>
      <p className='mt-8 ml-16 text-gray-400 italic mb-14 mr-[100px] '>We will take care of everything else</p>
    </div>
    <div className=" grid grid-cols-3 mt-25 mx-auto gap-5 ml-10 mr-10 ">
     <Box/>
     <Box/>
     <Box/>
    </div>
    </div>
  )
}

export default Testimonials
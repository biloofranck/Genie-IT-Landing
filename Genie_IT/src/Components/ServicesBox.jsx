import React from 'react'
import bonom from "../asset/Fin.jpg"
const ServicesBox = () => {
  return (
    <div className='bg-slate-800 mx-auto h-[380px] w-[300px] rounded-[30px]  '>
    <img
    src={bonom} 
    alt='sevice image'
    className='relative w-[280px] h-[200px] rounded-[30px] mt-2 ml-[10px]'/>
    <button className='mt-2  bg-violet-700 w-[80px] text-slate-500 text-[14px]  h-[20px] mb-4 rounded-full ml-4'>Twitch</button>
      <p className='text-white text-[14px] ml-7'>Set title</p>
      <p className='text-white text-[14px] ml-7'>Banear,Logo,...</p>
      <div className='flex text-[12px] mt-8'>
        <button className='border text-white w-[120px] rounded-[8px] mx-auto h-6 mr-1 '>View More</button>
        <button className='bg-cyan-500  text-white w-[120px] rounded-[8px] mx-auto h-6 ml-1  '>Get Free</button>
      </div>
    </div>
  )
}

export default ServicesBox
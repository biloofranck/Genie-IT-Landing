import React from 'react'
import ServicesBox from './ServicesBox'

const Service = () => {
  return (
   <div className='mt-24'>
    <h1 className='tex text-white text-center relative text-[50px] mb-12'> Nos Servies</h1>
     <div className='grid grid-cols-3 mb-16  gap-y-8 ml-10 mr-10 '>
      <ServicesBox/>
      <ServicesBox/>
      <ServicesBox/>
      <ServicesBox/>
      <ServicesBox/>
      <ServicesBox/>
    </div>
   </div>
  )
}

export default Service
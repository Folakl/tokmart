import React from 'react'
import one from '../assets/Rectangle 36.png'
import two from '../assets/Rectangle 44.png'
import three from '../assets/Rectangle 38.png'
import four from '../assets/Rectangle 43.png'
import five from '../assets/Rectangle 41.png'
import six from '../assets/Rectangle 45.png'

const SecondNavbar = () => {
  return (
    <div className='bg-[#dbdb33] h-[80px] w-full lg:px-20 md:px-10 px-2 py-5 flex justify-between gap-2'>
    <img src={one} alt="" className=' h-[40px]  lg:w-[80px] md:w-[60px] w-[50px]' />
    <img src={two} alt="" className='h-[40px]   lg:w-[80px] md:w-[60px] w-[50px]' />
    <img src={three} alt="" className='h-[40px] lg:w-[80px] md:w-[60px] w-[50px]' />
    <img src={four} alt=""  className='h-[40px] lg:w-[80px] md:w-[60px] w-[50px]'  />
    <img src={five} alt=""  className='h-[40px] lg:w-[80px] md:w-[60px] w-[50px]'  />
    <img src={six} alt=""   className='h-[40px] lg:w-[80px] md:w-[60px] w-[50px]' />

</div>
  )
}

export default SecondNavbar

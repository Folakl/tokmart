import React from 'react'
import one from '../assets/image 12.png'

const Payday = () => {
  return (
    <div>
      <div className='bg-[#fee973] grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1  '>
        <div>
          <img src={one} className='w-[650px] h-[600px]' alt="" />
        </div>
        <div className='p-20'>
          <h3 className='bg-white text-black text-[40px] px-5 font-bold'>PAYDAY</h3>
          <h3 className='text-[40px] font-bold'> SALE NOW</h3>
          <h3>Spend minimal $100 get 30% off voucher <br /> code for your next purchase</h3>
          <h3 className='font-bold my-5'>1 June - 10 June 2021</h3>
          <h3 className='my-5'>*Terms & Conditions apply</h3>

          <button className='bg-black h-[50px] my-10  font-bold w-[150px] text-white'>SHOP NOW</button>
        </div>
      </div>
     
    </div>
  )
}

export default Payday

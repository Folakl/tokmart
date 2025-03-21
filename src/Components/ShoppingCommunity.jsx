import React from 'react'

const ShoppingCommunity = () => {
  return (
    <div className='text-center  mt-10 pt-20 text-white bg-[#c2a62a] h-[500px]'>
        <h3 className='font-bold text-[40px]'>JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h3>   
        <h3>Type your email down below and be young wild generation</h3>

        <div className='flex justify-center'>
        <h3 className='bg-white lg:w-[400px] md:w-[400px] w-[350px] h-[60px] mt-5  mx-5 rounded-2xl flex'>
           <input type="email" className='text-black p-5' placeholder='Add your email here' />
            <button className='bg-black w-[110px] h-[45px] my-2 justify-end   text-white'>SEND</button>
        </h3>
        </div>
      
    </div>
  )
}

export default ShoppingCommunity

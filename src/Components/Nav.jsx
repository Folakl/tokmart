import React from 'react'
import one from '../assets/cib_f-secure.png'
import two from '../assets/FASHION.png'

const Nave = () => {
  return (
    <div>
      <nav className='flex justify-between fixed bg-[grey] w-full px-5 '>
        <div className='flex gap-2  m-3'>
            <img src={one} alt="" className='w-[40px] h-[40px]' />
            <img src={two} alt="" className='w-[100px] h-[40px]' />
        </div>
        <div className='flex-wrap gap-10 ml-2 font-bold lg:flex md:flex hidden'>
         <Link to='/shoppingcenter' >  <h3 className='mt-5 cursor-pointer  lg:animate-bounce md:animate-pulse '>HOMEPAGE</h3></Link>
            <Link to ="/fashion"><h3 className='mt-5 cursor-pointer'>FASHION</h3></Link>
           <Link to='/favorite'><h3 className='mt-5 cursor-pointer'>FAVOURITE</h3></Link>
          <Link to="/lifestyle"><h3 className='mt-5 cursor-pointer'>LIFESTYLE</h3></Link>
          <Link to='/signup'><button className='w-[120px]  mt-3  text-white h-[40px] rounded-md bg-black'>SIGN UP</button></Link>
        </div>
        <div className='lg:hidden md:hidden block mt-5 font-bold text-white'>
    <h3>Click me</h3>
  </div>
     </nav>
    </div>
  )
}

export default Nave

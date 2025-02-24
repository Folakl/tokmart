import React from 'react'
import one from '../assets/cib_f-secure.png'
import two from '../assets/FASHION.png'
import three from '../assets/LET’S EXPLORE UNIQUE CLOTHES..png'
import four from '../assets/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import lifestylebg from '../assets/How-To Guide – Creating A Stunning Flat Lay With Accessories For E-Commerce.jpeg'
import fashionbg from '../assets/fashion.jpeg'
import hoodiesbg from '../assets/Hoodies.jpeg'
import teesbg from '../assets/Fashion E-Commerce App Design.jpeg'
import coatsbg from '../assets/💗💗💗.jpeg'




const Navbar = () => {
  const location = useLocation();

  const backgroundImage = location.pathname === "/lifestyle" ? lifestylebg
  : location.pathname === "/coats"? coatsbg
  : location.pathname === "/fashion"? fashionbg
  : location.pathname === "/hoodies"? hoodiesbg
  : location.pathname === "/tees"? teesbg
  :location.pathname === "/shoppingcenter"? hoodiesbg
  :location.pathname === "/shoppingapp"? hoodiesbg
  :location.pathname === "/favorite"? hoodiesbg
  : four




  return (
    <div className='bg-white  rounded-md h-[630px] '>
     {/* Navbar section */}
     <nav className='flex justify-between fixed bg-[grey] w-full  '>
        <div className='flex gap-2  m-3'>
            <img src={one} alt="" className='w-[40px] h-[40px]' />
            <h3 className='text-[20px] font-bold mt-3'>TOKMART</h3>
        </div>
        <div className='flex-wrap gap-10 ml-2 font-bold lg:flex md:flex hidden'>
         <Link to='/shoppingcenter' >  <h3 className='mt-5 cursor-pointer  lg:animate-bounce md:animate-pulse '>HOMEPAGE</h3></Link>
            <Link to ="/fashion"><h3 className='mt-5 cursor-pointer'>FASHION</h3></Link>
           <Link to='/favorite'><h3 className='mt-5 cursor-pointer'>FAVOURITE</h3></Link>
          <Link to="/lifestyle"><h3 className='mt-5 cursor-pointer'>LIFESTYLE</h3></Link>
          <Link to='/signup'><button className='w-[120px]  mt-3  text-white h-[40px] rounded-md bg-black'>SIGN UP</button></Link>

        </div>
      
     </nav>
     {/* secondcontainer */}
     <div className='bg-[#ebeaea] h-[620px] w-full flex  rounded-md  '>
       <div className='p-20 w-[600px]'>
         <img src={three} alt="" className='w-[400px] h-[350px] my-5 ' />
         <h3 className='my-5 text-[20px]'>Live for Influential and Innovative fashion!</h3>
        <Link to='/shoppingcenter'> <button className='bg-black text-white rounded-md h-[50px] w-[150px] animate-bounce'>SHOP NOW</button></Link>
       </div>
       <div className='lg:flex md:flex hidden justify-center items-center mx-[150px] '>
        <img src={backgroundImage} alt="show me" className='h-[400px] w-[400px]  rounded-full border-2 border-black ' />
       </div>
     </div>
  <div>
 
  </div>
  

    </div>
  )
}

export default Navbar

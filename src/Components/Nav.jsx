import React from 'react'
import one from '../assets/cib_f-secure.png'
import two from '../assets/FASHION.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import carticon from '../assets/Shopping Cart 3D Icon ui png transparent background.jpeg';

const Nave = () => {
  const handleSelectChange = (event) => {
    const navigate = useNavigate()
    const selectedValue = event.target.value.toLowerCase();
    if (selectedValue) {
      navigate(`/${selectedValue}`);
    }
  };
  return (
    <div>
      <nav className='flex justify-between fixed bg-[grey] w-full  '>
        <div className='flex gap-2  m-2'>
            <img src={one} alt="" className='w-[30px] h-[40px]' />
            <img src={two} alt="" className='w-[100px] h-[40px]' />
        </div>
        <div className='flex-wrap gap-10  font-bold lg:flex md:flex hidden'>
         <Link to='/shoppingcenter' >  <h3 className='mt-5 cursor-pointer  lg:animate-bounce md:animate-pulse '>HOMEPAGE</h3></Link>
            <Link to ="/fashion"><h3 className='mt-5 cursor-pointer'>FASHION</h3></Link>
           <Link to='/favorite'><h3 className='mt-5 cursor-pointer'>FAVOURITE</h3></Link>
          <Link to="/lifestyle"><h3 className='mt-5 cursor-pointer'>LIFESTYLE</h3></Link>
          <Link to='/signup'><button className='w-[120px]  mt-3  text-white h-[40px] rounded-md bg-black'>SIGN UP</button></Link>
        </div>
         <div className='lg:hidden md:hidden flex gap-2'>
                   <select 
                     name="categories"
                     onChange={handleSelectChange}
                     className='w-[70px] h-[40px] mt-5 bg-[grey] text-white font-bold'>
                     <option value="">Select</option>
                     <option value="fashion">Fashion</option>
                     <option value="lifestyle">Lifestyle</option>
                     <option value="tees">Tees</option>
                     <option value="coats">Coats</option>
                     <option value="favorite">Favorite</option>
                     <option value="hoodies">Hoodies</option>
                   </select>
                   <Link to='/cart'><img src={carticon} className='w-[40px] h-[40px] mt-5' alt="" /></Link>
                   <Link to='/signup'><button className='w-[80px]  mt-5 text-white h-[40px] rounded-md bg-black'>SIGN UP</button></Link>
                 </div>
     </nav>
    </div>
  )
}

export default Nave

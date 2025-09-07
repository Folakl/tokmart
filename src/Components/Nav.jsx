import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import one from '../assets/cib_f-secure.png'
const Nave = () => {
  const navigate = useNavigate(); // Moved useNavigate to the top level
  const [isOpen, setIsopen] = useState(false)
 const handleSignup =()=>{
   navigate("/signup")
 }
  const handleMenu =()=>{
    setIsopen(!isOpen)
  }

  return (
    <div className='fixed  w-full top-0   '>
      <nav className='flex justify-between bg-[grey]  text-[[#312424] w-full px-3 '>
        <div className='flex gap-2 m-2'>
          <img src={one} alt="" className='w-[30px] h-[40px]' />
         <h3 className='text-[30px] font-bold'>TokMart</h3>
        </div>
        <div className='flex-wrap gap-10 font-bold lg:flex md:flex hidden'>
          <Link to='/shoppingcenter'><h3 className='mt-5 cursor-pointer'>HOMEPAGE</h3></Link>
          <Link to='/fashion'><h3 className='mt-5 cursor-pointer'>FASHION</h3></Link>
          <Link to='/favorite'><h3 className='mt-5 cursor-pointer'>FAVOURITE</h3></Link>
          <Link to='/lifestyle'><h3 className='mt-5 cursor-pointer'>LIFESTYLE</h3></Link>
          
        </div>
        <div className='lg:flex md:flex hidden gap-5'>
            <Link to='/cart' className='mt-5'>
            <ion-icon name="cart-sharp" size="large"></ion-icon> 
          </Link>
        
          <button className='w-[120px] mt-3 py-2 text-white h-[40px] rounded-md bg-black cursor-pointer lg:grid md:grid hidden' onClick={handleSignup}>SIGN UP</button>
         
        </div>
        
          
          <div className='lg:hidden md:hidden flex'>
             <Link to='/cart' className='mt-5'>
            <ion-icon name="cart-sharp" size="large"></ion-icon> 
          </Link>
            <div className='cursor-pointer mt-5 lg:hidden md:hidden grid' onClick={handleMenu} >
           {isOpen ? (
          <div ><ion-icon  name="close-outline" size="large" ></ion-icon></div>

           ): (<div><ion-icon name="menu-outline" size="large" ></ion-icon></div>)}
          </div>
          </div>
          


      </nav>
      {isOpen && 
        <div className='bg-[#312424] inset-0 grid  z-2 text-start w-full h-contain leading-normal p-3 text-white font-bold'>
          <Link to="/Shoppingcenter">Homepage</Link>
          <Link to="/fashion">Fashion</Link>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/tees">Tees</Link>
          <Link to="/coats">Coats</Link>
          <Link to="/favorite">Favorite</Link>
          <Link to="/hoodies">Hoodies</Link>
          <Link to='/signup'>
            <button className='w-[120px] mt-2  text-white h-[40px] rounded-md bg-black'>SIGN UP</button>
          </Link>
           
         </div>}
    </div>
  );
}

export default Nave;

import  { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import one from '../assets/cib_f-secure.png'
import { CartContext } from './CartContext'
const Nav = () => {
  const navigate = useNavigate(); 
  const [isOpen, setIsopen] = useState(false)
  const {isloggedin} = useContext(CartContext)
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
          <Link to='/home'><h3 className='mt-5 cursor-pointer'>HOME</h3></Link>
          <Link to='/fashion'><h3 className='mt-5 cursor-pointer'>FASHION</h3></Link>
          <Link to='/favorite'><h3 className='mt-5 cursor-pointer'>FAVOURITE</h3></Link>
          <Link to='/lifestyle'><h3 className='mt-5 cursor-pointer'>LIFESTYLE</h3></Link>
          
        </div>
        <div className='lg:flex md:flex hidden gap-5'>
            <Link to='/cart' className='mt-5'>
            <ion-icon name="cart-sharp" size="large"></ion-icon> 
          </Link>
        
             {
                isloggedin ? (<div ></div>): (
                  <Link to="/signup" className='py-1'>
                <button className="w-[120px] mt-2 text-white h-[40px] rounded-md bg-black" onClick={handleSignup}>
                  SIGN UP
                </button>
              </Link>
              )
              }
         
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
          <Link className='py-1' to="/home">Home</Link>
          <Link className='py-1' to="/fashion">Fashion</Link>
          <Link className='py-1' to="/lifestyle">Lifestyle</Link>
          <Link className='py-1' to="/tees">Tees</Link>
          <Link className='py-1' to="/coats">Coats</Link>
          <Link className='py-1' to="/favorite">Favorite</Link>
          <Link className='py-1' to="/hoodies">Hoodies</Link>
              {
                isloggedin ? (<div className='pt-1'>hhr</div>): (
                  <Link to="/signup" className='py-1'>
                <button className="w-[120px] mt-2 text-white h-[40px] rounded-md bg-black">
                  SIGN UP
                </button>
              </Link>
              )
              }
           
         </div>}
    </div>
    )
 
}

export default Nav;

import React from 'react'
import one from '../assets/Women Casual Spring_Fall Plaid Heavyweight Elastic Waist Long H-Line Medium Elasticity Pocket Stitching Pants.jpeg'
import two from '../assets/49292f9d-d83d-433d-8b72-338afe80d38f.jpeg'
import three from '../assets/Arrow 2.png'
import { Link } from 'react-router-dom'
import four from '../assets/45+ Super Stylish Fall Outfits for Women 2024.jpeg'
import five from '../assets/5104d4ab-6348-47f3-a56f-32e488d1d92e.jpeg'



const Youngfavourite= () => {


  return (      
       <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-5'>
        <div>
          <img src={one} alt=""  className='w-[250px] h-[250px]' />
          <div className='flex gap-[60px] mt-5 '>
         <div>
         <h3 className='font-bold'>Trending on instagram</h3>
         <h3>Buy Now!</h3>
         </div>
         <div className='mt-4'>
         <Link to="/hoodies"> <img src={three} alt="" /></Link>
         </div>
          </div>
        </div>
        <div>
          <img src={five} alt=""  className='w-[250px] h-[250px]' />
          <div className='flex gap-[160px] mt-5 '>
         <div>
         <h3 className='font-bold'>Coats</h3>
         <h3>Buy Now!</h3>
         </div>
         <div className='mt-4'>
        <Link to="/coats"> <img src={three} alt="" /></Link>
         </div>
          </div>
        </div>
        <div>
          <img src={four} alt=""  className='w-[250px] h-[250px]' />
          <div className='flex gap-[160px]  mt-5 '>
         <div>
         <h3 className='font-bold'>Lifestyle</h3>
         <h3>Buy Now!</h3>
         </div>
         <div className='mt-4'>
         <Link to="/lifestyle"> <img src={three} alt="" /></Link>
         </div>
          </div>
        </div>
        <div>
          <img src={two} alt=""  className='w-[250px] h-[250px]' />
          <div className='flex gap-[160px]  mt-5 '>
         <div>
         <h3 className='font-bold'>Fashion</h3>
         <h3>Buy Now!</h3>
         </div>
         <div className='mt-4 '>
         <Link to="/fashion"> <img src={three} alt="" /></Link>
         </div>
          </div>
        </div>
       
       
       </div>

    
  )
}

export default Youngfavourite

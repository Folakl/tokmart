import React from 'react'
import SecondNavbar from '../Components/SecondNavbar'
import NewArrivals from '../Components/NewArrivals'
import Navbar from '../Components/Navbar'
import Footertwo from  '../Components/Footertwo'

const ShoppingWebsite = () => {
  return (
    <div>
       <Navbar/>
        
        <SecondNavbar/>
        <h3 className='font-bold text-[30px] mx-10 mt-5'>NEW ARRIVALS</h3>
        <NewArrivals/>
        <Footertwo/>
    </div>
  )
}

export default ShoppingWebsite

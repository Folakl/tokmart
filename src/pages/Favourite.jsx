import React from 'react'
import Youngfavourite from '../Components/Youngfavourite'
import Download from '../Components/Download'
import Navbar from '../Components/Navbar'
import Footertwo from  '../Components/Footertwo'

const Favourite = () => {
  return (
    <div>
      <Navbar/>
   <h3 className='font-bold text-[30px] my-10 ml-20'>Young’s Favourite</h3>
      
      <Youngfavourite/>
      <Download/>
      <Footertwo/>
    </div>
  )
}

export default Favourite

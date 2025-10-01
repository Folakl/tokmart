
import Navbar from '../Components/Navbar'
import NewArrivals from '../Components/NewArrivals'
import Payday from '../Components/Payday'
import Youngfavourite from '../Components/Youngfavourite'
import Download from '../Components/Download'
import Footertwo from  '../Components/Footertwo'
import ShoppingCommunity from '../Components/ShoppingCommunity'

const Home  = () => {
  return (
    
     <div>
     <Navbar/>
    <h3 className='font-bold lg:text-[50px] md:text-[50px] text-[30px]  mx-10 mt-10'>NEW ARRIVALS</h3>
     <NewArrivals/> 
     <Payday/>    
     <marquee  direction="right"><h3 className='font-bold text-[30px] my-10 ml-20'>Young’s Favourite</h3> </marquee>
     <Youngfavourite/>
     <Download/>
     <ShoppingCommunity/>
     <Footertwo/>

    </div>
  )
}

export default Home
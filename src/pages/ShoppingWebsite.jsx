
import NewArrivals from '../Components/NewArrivals'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ShoppingWebsite = () => {
  return (
    <div>
       <Navbar/>
        
       
        <h3 className='font-bold text-[30px] pl-10 '>NEW ARRIVALS</h3>
        <NewArrivals/>
        <Footer/>
    </div>
  )
}

export default ShoppingWebsite

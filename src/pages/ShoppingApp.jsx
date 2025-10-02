
import Payday from '../Components/Payday'
import Youngfavourite from '../Components/Youngfavourite'
import Download from '../Components/Download'
import ShoppingCommunity from '../Components/ShoppingCommunity'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const ShoppingApp = () => {
  return (
    <div>
      <Navbar/>
      <Payday/>
      <h3 className='font-bold text-[30px] my-10 ml-20'>Young’s  Favourite</h3>
      <Youngfavourite/>
      <Download/>
      <ShoppingCommunity/>
      <Footer/>
    </div>
  )
}

export default ShoppingApp

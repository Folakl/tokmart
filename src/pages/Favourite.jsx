
import Youngfavourite from '../Components/Youngfavourite'
import Download from '../Components/Download'
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Favourite = () => {
  return (
    <div>
      <Nav/>
   <h3 className='font-bold text-[30px] mt-[60px] ml-20 '>Young’s Favourite</h3>
      
      <Youngfavourite/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Favourite

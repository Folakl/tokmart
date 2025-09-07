import one from '../assets/Rectangle 20.png'
import three from '../assets/Rectangle 22.png'
import two from '../assets/Rectangle 21.png'
import four from '../assets/Arrow 2.png'
import { Link } from 'react-router-dom'


const NewArrivals = () => {


  return (
    <div>
     
        <div className='mx-5 gap-5 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 '>
            <div>
                <img src={one} className='w-[300px] h-[300px] rounded-md' alt="" />
                <h3 className='font-bold py-2'>Hoodies & Sweatshirt</h3>
                <div className='flex'>
                    <h3 className=''>Explore now </h3>
                    <Link to='/hoodies'><img src={four} alt="" className='ml-[200px] mt-2 pb-3' /></Link>
                </div>
            </div>
            <div>
                <img src={two} className='w-[300px] h-[300px] rounded-md' alt="" />
                <h3 className='font-bold py-2'>Coats & Parkas</h3>
                <div className='flex'>
                    <h3 className=''>Explore now </h3>
                    <Link to='/coats'><img src={four} alt="" className='ml-[200px] mt-2 pb-3' /></Link>
                </div>
            </div>
            <div>
                <img src={three} className='w-[300px] h-[300px] rounded-md' alt="" />
                <h3 className='font-bold py-2'>Tees & T-shirt</h3>
                <div className='flex'>
                    <h3 className=''>Explore now </h3>
                    <Link to='/tees'><img src={four} alt="" className='ml-[200px] mt-2 pb-5' /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals


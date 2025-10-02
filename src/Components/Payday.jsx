import one from '../assets/image 12.png'
import { useNavigate } from 'react-router-dom'
const Payday = () => {
  const navigate = useNavigate();
  const handleShop=()=>{
    navigate('/coats')
  }
  return (
    <div>
      <div className='bg-[#fee973] grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 lg:gap-0 md:gap-0 gap-5 '>
        <div>
          <img src={one} className='w-[650px] lg:h-[500px] md:h-[500px] h-[300px]' alt="" />
        </div>
        <div className='p-[50px]'>
          <h3 className='bg-white text-black text-[40px] mx-10 px-10 font-bold'>PAYDAY</h3>
          <h3 className='text-[40px] font-bold'> SALE NOW</h3>
          <h3>Spend minimal $100 get 30% off voucher  code for your next purchase</h3>
          <h3 className='font-bold my-3'>1 June - 10 June 2021</h3>
          <h3 className='my-3'>*Terms & Conditions apply</h3>

          <button className='bg-black h-[50px] my-10  font-bold w-[150px] text-white' onClick={handleShop}>SHOP NOW</button>
        </div>
      </div>
     
    </div>
  )
}

export default Payday

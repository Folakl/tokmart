import one from '../assets/Rectangle 55.png'
import two from '../assets/Rectangle 18.png'
import three from '../assets/Group 74.png'

const Download = () => {
  return (
    <div className='flex justify-start mt-5 '>
        <div className='lg:m-20 md:m-10 m-5'>
            <h3 className='lg:text-[40px] md:text-[40px] text-[30px] font-bold text-black'>DOWNLOAD APP & <br />
            GET THE VOUCHER!</h3>
            <h3>Get 30% off for first transaction using <br />
            Rondovision mobile app for now.</h3>
            <div className='lg:flex gap-2 md:flex block mt-5 '>
               <img src={one} alt="" className='w-[100px]' />
               <img src={two} alt="" className='w-[100px]' />
            </div>
        </div>
        <div className='mx-20 lg:flex md:flex hidden' >
         <img src={three} alt="" className='h-[400px] ' />
        </div>
      
    </div>
  )
}

export default Download

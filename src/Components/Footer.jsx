import fbimg from '../assets/Group 12.png'
import igimg from '../assets/Group 12.png'
import ximg from '../assets/Group 11.png'
import inimg from '../assets/Group 11.png'

const Footer = () => {
  return (
      <div className='bg-black p-10 text-white grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-20 md:gap-10  gap-5  '>
          <div>
            <h3 className='font-bold py-5'>FASHION</h3> 
           <h3>Complete your style with awesome clothes from us.</h3>
           <div className='flex  gap-2 mt-10'>
            <img src={fbimg} alt=""  />
            <img src={igimg} alt="" />
            <img src={ximg} alt="" />
            <img src={inimg} alt="" />
          
           </div>
          </div>
    
          <div>
            <h3 className='font-bold py-3'>Company</h3>
            <h3 className='py-5'>About</h3>
            <h3 className='py-5'>Contact us</h3>
            <h3 className='py-5'>Support</h3>
            <h3 className='py-5'>Careers</h3>
          </div>
          <div>
            <h3 className='font-bold py-3'>Quick Link</h3>
            <h3  className='py-3'>Share Location</h3>
            <h3 className='py-3'>Orders Tracking</h3>
            <h3 className='py-3'>Size Guide</h3>
            <h3 className='py-3'>FAQs</h3>
          </div>
          <div>
            <h3 className='font-bold py-3'>Legal</h3>
            <h3  className='py-3'>Terms & conditions</h3>
            <h3 className='py-3'>Privacy Policy</h3>
            <h3 className='py-3'>Terms & conditions</h3>
            <h3 className='py-3'>Privacy Policy</h3>
          </div>
        </div>
  )
}

export default Footer

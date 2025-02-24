import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='bg-black p-10 text-white grid grid-cols-1 lg:grid-cols-4 md-grid-cols-2  '>
      <div>
        <h3 className='font-bold py-5'>FASHION</h3> 
       <h3>Complete your style with awesome clothes from us.</h3>
      </div>

      <div>
        <h3 className='font-bold py-5'>Company</h3>
        <h3 className='py-5'>About</h3>
        <h3>Contact us</h3>
      </div>
      <div>
        <h3 className='font-bold py-5'>Quick Link</h3>
        <h3  className='py-5'>Share Location</h3>
        <h3>Orders Tracking</h3>
      </div>
      <div>
        <h3 className='font-bold py-5'>Legal</h3>
        <h3  className='py-5'>Terms & conditions</h3>
        <h3>Privacy Policy</h3>
      </div>
    </div>
    </div>
  )
}

export default Footer

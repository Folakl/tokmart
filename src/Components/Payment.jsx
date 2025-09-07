
const Payment = () => {
  return (
   <div className="bg-blue-600 p-10 h-screen">
     <div className='bg-white rounded-2xl w-[450px] h-contain p-10 justify-self-center  flex'>
       <div className="bg-purple-900 rounded-md w-1/3 p-5 text-white font-bold">
       <div className="flex gap-1"><h3 className="py-1"><ion-icon name="card-outline" ></ion-icon> </h3><h3 className="">TokMart</h3></div>
       <h3>#30000</h3>
       <div className="mt-[120px] text-[10px]">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi voluptatibus voluptates minus unde neque libero vel dolores consequuntur sapiente.</h3>

       </div>
         
       </div>
       <div className="w-2/3  px-5">
        <h3 className="py-2">Select Payment Method</h3>
        <div className="flex gap-3">
         <h3 className="text-blue-700 w-[50px] h-[50px] p-2 bg-[#daaabd] rounded-2xl"><ion-icon name="card-outline" size="large"></ion-icon></h3>
           <h3 className="text-blue-700 w-[50px] h-[50px] p-2 bg-[#daaabd] rounded-2xl"><ion-icon name="logo-paypal" size="large"></ion-icon></h3>
           <h3 className="text-blue-700 w-[50px] h-[50px] p-2 bg-[#daaabd] rounded-2xl"><ion-icon name="logo-pay" size="large"></ion-icon></h3>
          <h3 className="text-blue-700 w-[50px] h-[50px] p-2 bg-[#daaabd] rounded-2xl"><ion-icon name="logo-paypal" size="large"></ion-icon></h3>
        </div>
        <input type="number" className="outline-none rounded-md bg-[#daaabd] text-black  w-full h-[40px] my-2 p-2" placeholder="Card number" />
        <br />
        <input type="text" className="outline-none rounded-md bg-[#daaabd] text-black  w-full h-[40px] my-2 p-2" placeholder="Card holder" />
        <br />
        <div className="lg:flex md:flex grid gap-2">
        <input type="month" name="" id=""  className="p-2 rounded-md bg-[#daaabd] w-[115px]" placeholder="MM/YY"/>
          <input type="text"  className="p-2 rounded-md bg-[#daaabd] w-[115px]" placeholder="CVV"/>

        </div>
        <div className="flex gap-5 mt-5">
          <input type="checkbox" name="" id=""  />
        <h3 className="text-[12px]">Save card details for future use</h3>

        </div>

        <div className="w-[180px] h-[30px]  bg-purple-900 rounded-full flex justify-between mt-5 pl-5    text-white font-bold">
          <h3 >Pay now 
            
            </h3>
            <span className="rounded-full bg-purple-400 w-7 text-end h-7 py-1"><ion-icon name="arrow-forward-outline"></ion-icon></span>
       </div>


    </div>

        </div>

   </div>
  )
}

export default Payment
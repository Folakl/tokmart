
import one from '../assets/Women Casual Spring_Fall Plaid Heavyweight Elastic Waist Long H-Line Medium Elasticity Pocket Stitching Pants.jpeg'
import two from '../assets/49292f9d-d83d-433d-8b72-338afe80d38f.jpeg'
import three from '../assets/Arrow 2.png'
import four from '../assets/45+ Super Stylish Fall Outfits for Women 2024.jpeg'
import five from '../assets/5104d4ab-6348-47f3-a56f-32e488d1d92e.jpeg'

import { useNavigate } from 'react-router-dom'

const Youngfavourite= () => {
  const navigate = useNavigate();
   const favorite = [
    {
      id:1,
      name:"Trending on instagram",
      img: one,
      link: '/hoodies'
      
    },
    {
      id:2,
      name:"Coats",
      img: two,
      link:'/coats'
    },
    {
      id:3,
      name:"Lifestyle",
      img: four,
      link:'/lifestyle'
     
    },
    {
      id:4,
      name:"Fashion",
      img: five,
      link:"/fashion"

    },
   ]

   const handleBuy=(link)=>{
    navigate(link)
   }

  return (      
      
       <div className=' flex flex-wrap justify-center gap-10 mx-5'>
      {
        favorite.map((fave)=>(
             <div key={fave.id}>
                   
         <img src={fave.img} alt=""  className='w-[250px] h-[250px] rounded-md' />
         <div className='flex justify-between mt-5 '>
        <div>
        <h3 className='font-bold'>{fave.name}</h3>
        <h3>Buy Now!</h3>
        </div>
        <div className='mt-4'>
     <img src={three} alt="" className='cursor-pointer' onClick={()=>{handleBuy(fave.link)}} />
        </div>
         </div>
       
             </div>
        ))
      }
        
        
       
       
       </div>


    
  )
}

export default Youngfavourite

import one from '../assets/Rectangle 20.png'
import three from '../assets/Rectangle 22.png'
import two from '../assets/Rectangle 21.png'
import four from '../assets/Arrow 2.png'
import { useNavigate } from 'react-router-dom'


const NewArrivals = () => {
    const navigate = useNavigate();
  const Arrival = [
    {
        id:1,
        name:"Hoodies & Sweatshirt",
        img:one,
        link: '/hoodies'
    },
    {
        id:2,
        name:"Coats & Parkas",
        img:two,
        link: '/coats'
    },
    {
        id:3,
        name:"Tees & Denim",
        img:three,
        link: '/tees'
    }
  ]

 const handleExplore=(link)=>{
         navigate(link)

 }
  return (
    <div>
     
        <div className='mx-20  flex flex-wrap justify-between '>
            {
                Arrival.map((fave)=>(
                    <div key={fave.id}>
                         
                <img src={fave.img} className='w-[300px] h-[300px] rounded-md' alt="" />
                <h3 className='font-bold py-2'>{fave.name}</h3>
                <div className='flex justify-between'>
                    <h3 className=''>Explore now </h3>
                    <img src={four} alt="" className=' mt-2 pb-3 cursor-pointer' onClick={()=>{handleExplore(fave.link)}} />
                </div>
           
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default NewArrivals


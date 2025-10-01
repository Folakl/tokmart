import Nave from '../Components/Nav';
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import Products from '../Components/Product'; // Fix: Import Products list
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ticked from "../assets/ticked ster.jpeg"
import unticked from "../assets/ticked star.jpeg"
import Footertwo from '../Components/Footertwo';

const Hoodies = () => {
    const filterbyCategory = Products.filter(item => item.categories === "trends"); // Fix: Use `Products`, not `Product`
    const { addToCart } = useContext(CartContext); // Fix: Correct function name
      const [ratings,setRatings] = useState([]);
       function handleRating(productid,index){
           setRatings(prevRatings => ({
               ...prevRatings,
               [productid]: index + 1 
           }));
         };

         


    return (
        <div>
            <Nave />
            <h3 className='flex justify-center font-bold text-[30px] mt-20 bg-gradient-to-r from-blue-950 to-purple-400 text-transparent bg-clip-text'>
                New <span className='bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text'>Trends</span>
            </h3>
            <div className='flex flex-wrap justify-center mx-5 my-5 gap-5 '>
                {filterbyCategory.map(product => (
                    <div key={product.id}>
                        <img src={product.img} alt="" className='rounded-2xl w-[200px] h-[200px] lg:w-[220px] lg:h-[350px] md:h-[350px] md:w-[220px]' />
                        <h3 className='pt-5 '>{product.Name}</h3>
                        <div >
                            <h3>Price: <span className='font-bold'>${product.price}</span></h3>
                        <div className='flex'>
                            {[...Array(5)].map((_, index) => (
                                <img 
                                    key={index}
                                    src={index < (ratings[product.id] ) ? ticked : unticked}
                                    alt="star"
                                    className='w-[20px] h-[20px] my-2 cursor-pointer'
                                    onClick={() => handleRating(product.id, index)}
                                />
                            ))}
                            </div>

                             <div className='flex lg:gap-[50px] md:gap-[50px] gap-5'>
                              <button
                                   className='lg:w-[120px] md:w-[120px] w-[105px]  h-[30px] `` text-white rounded-2xl mt-2'
                                   onClick={()=>{addToCart(product)}}
                               >{

                               }</button>
                             <Link to='/cart'>  <ion-icon name="cart-sharp" size="large"></ion-icon> </Link>
                              </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footertwo/>
        </div>
    );
};

export default Hoodies;
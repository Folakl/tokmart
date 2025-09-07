import Nave from '../Components/Nav';
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import Products from '../Components/Product'; // Fix: Import Products list
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ticked from "../assets/ticked ster.jpeg"
import unticked from "../assets/ticked star.jpeg"
import Footertwo from '../Components/Footertwo';

const Tees = () => {
    const filterbyCategory = Products.filter(item => item.categories === "tees"); // Fix: Use `Products`, not `Product`
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
            <h3 className='flex justify-center font-bold mt-20 text-[30px] bg-gradient-to-r from-blue-950 to-purple-400 text-transparent bg-clip-text'>
                New <span className='bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text'>Trends</span>
            </h3>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-5 my-5 gap-5'>
                {filterbyCategory.map(product => (
                    <div key={product.id}>
                        <img src={product.img} alt="" className='rounded-2xl w-[200px] h-[200px] lg:w-[350px] lg:h-[300px] md:h-[300px] md:w-[350px]' />
                        <h3 className='pt-5'>{product.Name}</h3>
                        <div>
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
                                 <div className='flex lg:gap-[120px] md:gap-[60px] gap-5'>
                                  <button
                                       className='lg:w-[120px] md:w-[120px] w-[105px]  h-[30px] bg-[black] text-white rounded-2xl mt-2'
                                       onClick={() => addToCart(product)}
                                   >Add to cart</button>
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

export default Tees;
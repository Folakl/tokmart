import Nave from '../Components/Nav';
import { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import Products from '../Components/Product'; // Fix: Import Products list
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ticked from "../assets/ticked ster.jpeg"
import unticked from "../assets/ticked star.jpeg"
import Footertwo from '../Components/Footertwo';

const Fashion = () => {
    const filterbyCategory = Products.filter(item => item.categories === "catalogue"); // Fix: Use `Products`, not `Product`
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
            <h3 className='flex justify-center mt-[80px] font-bold text-[30px] bg-gradient-to-r from-blue-950 to-purple-400 text-transparent bg-clip-text'>
                New <span className='bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text'>Trends</span>
            </h3>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-5 my-5 gap-5'>
                {filterbyCategory.map(product => (
                    <div key={product.id}>
                        <img src={product.img} alt="" className='rounded-2xl w-[250px] h-[200px] lg:w-[250px] lg:h-[250px] md:h-[250px] md:w-[250px] ' />
                        <h3 className='pt-5 text-[20px]'>{product.Name}</h3>
                        <div>
                            <h3 className='text-[20px]'>Price: <span className='font-bold'>${product.price}</span></h3>
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
                              <Link to='/cart'> 
                               <ion-icon name="cart-sharp" size="large"></ion-icon> 
                              </Link>
                              </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footertwo/>
        </div>
    );
};

export default Fashion;


 
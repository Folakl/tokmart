    import Nav from '../Components/Nav';
    import { useContext } from 'react';
    import { CartContext } from '../Components/CartContext';
    import Products from '../Components/Product'; 
    import { Link } from 'react-router-dom';
    import { useState } from 'react';
    import ticked from "../assets/ticked ster.jpeg"
    import unticked from "../assets/ticked star.jpeg"
    import Footer from '../Components/Footer';
    import { imageMap } from '../Components/Product';

    const Fashion = () => {
        const filterbyCategory = Products.filter(item => item.categories === "catalogue"); 
        const { addToCart,ratings,rateProduct } = useContext(CartContext); 
        
        const [added,setAdded] = useState(false)
        
        function handleAdd(product) {
    addToCart(product); 
    setAdded(prev => ({ ...prev, [product.id]: true })); 
  }

        return (
            <div>
                <Nav />
                <h3 className='flex justify-center mt-[80px] font-bold text-[30px] bg-gradient-to-r from-blue-950 to-purple-400 text-transparent bg-clip-text'>
                    New <span className='bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text'>Trends</span>
                </h3>
                <div className='flex flex-wrap  justify-center my-5 gap-5'>
                    {filterbyCategory.map(product => (
                        <div key={product.id}>
                            <img src={imageMap[product.img]} alt={product.Name} className='rounded-2xl w-[200px] h-[2500px] lg:w-[220px] lg:h-[320px] md:h-[250px] md:w-[250px] ' />
                            <h3 className='pt-5 text-[20px]'>{product.Name} </h3>
                            <div>
                                <h3 className='text-[20px]'>Price: <span className='font-bold'>${product.price}</span></h3>
                                    <div className='flex'>
                                    {[...Array(5)].map((_, index) => (
                                        <img 
                                            key={index}
                                            src={index < (ratings[product.id] ) ? ticked : unticked}
                                            alt="star"
                                            className='w-[20px] h-[20px] my-2 cursor-pointer'
                                            onClick={() => rateProduct(product.id, index+1)}
                                        />
                                    ))}
                                    </div>
                            <div className='flex lg:gap-[50px] md:gap-[50px] gap-5'>
                               <button
                                className='lg:w-[120px] md:w-[120px] w-[105px]  h-[30px] bg-black text-white rounded-2xl mt-2'
                                onClick={()=>{handleAdd(product)}}
                            >{added[product.id] ? "Added to cart" : "Add to cart"}</button>
                                <Link to='/cart'> 
                                <ion-icon name="cart-sharp" size="large"></ion-icon> 
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                
                
                </div>
                <Footer/>
            </div>
        );
    };

    export default Fashion;


    
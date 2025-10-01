import  { useContext} from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import deleteicon from '../assets/Delete Icon.jpeg'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const { cart,  updateQuantity, removeFromCart,total  } = useContext(CartContext);

    const handleCheckout=()=>{
       navigate("/payment")
    }
    return (
    <div>
        <Nav/>
        <div className='flex gap-5 mx-5 justify-end my-2'>
        <Link to='/shoppingcenter'> <button className='w-[150px] h-[40px] text-white font-bold bg-black'>Home</button></Link>
        <button className='w-[150px] h-[40px] text-white font-bold bg-[#777171]'>Check out</button>
        </div>
        <h3 className='flex justify-center font-bold text-[30px] my-5'>Your cart</h3>

             <div className='flex flex-wrap justify-center gap-5 mx-5 '>
            {cart.length === 0 ? (
                <h3>Your cart is empty</h3>
            ) : (
                cart.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.Name} className=' lg:w-[220px] lg:h-[350px] md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-md ' />
                        <h3 className=' text-[20px]'>{item.Name}</h3>
                        <div className='flex '>
                        <h3 className='text-[20px]'>price: <span className='font-bold'>${item.price}</span></h3>
                        <img src={deleteicon}   onClick={() => removeFromCart(item.id)} alt="" className=' lg:w-[50px] lg:h-[50px]  md:w-[50px] md:h-[50px] w-[40px] h-[40px] ml-5 lg:ml-20 md:ml-10' /></div> 
                         <div >
                         <h3 >Add more quantity: </h3>
                         <div className='flex gap-2 my-3'>
                            <h3 className='font-semibold'>Qty:</h3>
                         <div className='flex lg:w-[120px] md:w-[120px] w-[100px] border-black border-2 rounded-md  gap-5'>
                         <button className='w-[40px]  h-full bg-[grey] font-bold'  onClick={() => updateQuantity(item.id, - 1)}>-</button>
                          <h3 className='font-bold'>{item.Quantity}</h3>
                         <button className='w-[40px]  h-full bg-[grey] font-bold'  onClick={() => updateQuantity(item.id, + 1)}>+</button>
                         </div> 
                         </div>
                         </div>

                        
          
                    </div>
                ))
            )}

           
        </div>
       {cart.length > 0 && (
        <div className="mx-10 my-5 text-right font-bold text-[20px]">
            Total: ${total}
          </div>
            )}
       
          {cart.length === 0 ? (<div></div>): <div  className=' mb-5 justify-self-end mx-10 '>
          <button className='bg-[#2c1818] text-white w-[200px] h-[40px] font-bold ' onClick={handleCheckout}>Check Out</button>
          
         </div> }
    </div>
    );
};

export default Cart;


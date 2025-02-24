// import { Children, createContext, useContext, useState } from "react";
// import Products from "./Product";

// const CartContext = createContext();

// export const CartProvider = ({Children})=>{
//     const [cart,SetCart] = useState([])

//    const addToCart =()=>{
//     SetCart((prevCart)=>{
//         const existingItem = prevCart.find((item)=> item.id === Products.id)

//           if(existingItem){
//             return prevCart.map((item)=>
//                 item.id === Products.id 
//             );
//           }
//           else{
//             return [...prevCart, {...Products, quantity:1}];
//           }

//     });
    
//    };
//    return(
//     <CartContext value ={{cart,SetCart, addToCart}}>
//         {Children}
//     </CartContext>
// )

// };

// export const useCart = () => useContext(CartContext);



// import { children, createContext, useState } from "react";
// import Products from "./Product";

// export const CartContext = createContext();

// const CartProvider = ({children})=> {
//     const [cart,SetCart] = useState([]);
  
// const addToCart = (product)=> {
//     SetCart((prevCart)=>{
//                 const existingItem = prevCart.find((item)=> item.id === Products.id)
        
//                   if(existingItem){
//                     return prevCart.map((item)=>
//                         item.id === Products.id 
//                     );
//                   }
//                   else{
//                     return [...prevCart, {...Products, quantity:1}];
//                   }
        
//     }); 
// };
  
// return (
//     <CartContext.Provider value = {{cart, addToCart}}>
//         {children}
//     </CartContext.Provider> 
// )


//  }



// export default CartProvider;

import { createContext, useState } from "react";
import Products from "./Product"; // Import Product list if needed

export const CartContext = createContext();

const CartProvider = ({ children }) => {  // Fix: Lowercase "children"
    const [cart, SetCart] = useState([]);

    const addToCart = (product) => {
        SetCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id); 

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    // alert(" `${item.Name}` already added to cart,if you wish to add more quantity,update in cart")
                )

            } else {
                return [...prevCart, { ...product, quantity: 1 }]
                // alert("item suceesfully added to cart");
            }
        });
    };

    const removeFromCart = (productId) => {
        SetCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

   
    const updateQuantity = (productId, change) => {
        SetCart(prevCart => prevCart.map(item =>
            item.id === productId
                ? { ...item, Quantity: Math.max(1, item.Quantity + change) } // Ensure quantity doesn't go below 1
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart , removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

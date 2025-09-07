import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {  // Fix: Lowercase "children"
    const [cart, SetCart] = useState([]);

    const addToCart = (product) => {
        SetCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id); 

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                   
                )

            } else {
                return [...prevCart, { ...product, quantity: 1 }]
             
            }
        });
    };

    const removeFromCart = (productId) => {
        SetCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

   
    const updateQuantity = (productId, change) => {
        SetCart(prevCart => prevCart.map(item =>
            item.id === productId
                ? { ...item, Quantity: Math.max(1, item.Quantity + change) } 
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

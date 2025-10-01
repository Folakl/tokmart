import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, SetCart] = useState([]);
  const [isloggedin, setIsloggedin] = useState(false);
  const [user, setUser] = useState(null); 
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    SetCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    SetCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    SetCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };


  useEffect(() => {
    const u = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(u);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isloggedin,
        setIsloggedin,
        user,
        setUser,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

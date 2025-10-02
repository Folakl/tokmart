  import { createContext, useState, useEffect } from "react";
  import { supabase } from "../supabaseClients";

  export const CartContext = createContext();

  const CartProvider = ({ children }) => {
    const [cart, SetCart] = useState([]);
    const [isloggedin, setIsloggedin] = useState(false);
    const [user, setUser] = useState(null); 
    const [total, setTotal] = useState(0);
    const [ratings,setRatings] = useState({});
    const [details,setDetails]= useState({})

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

  const rateProduct = async (productId, rating) => {
    if (!user) return;

   
    setRatings((prev) => ({ ...prev, [productId]: rating }));

   
    const { error } = await supabase.from("ratings").upsert([
      {
        user_id: user.id,
        product_id: productId,
        rating,
      },
    ],
    { onConflict: ["user_id", "product_id"] } );

    if (error) console.error("Error saving rating:", error.message);
  };


    useEffect(() => {
      const u = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(u);
    }, [cart]);
      

    //  sync cart with supabase whenever it updates
      
         useEffect(()=>{
          const syncCart = async()=>{
            if(!user)return


             const {error} = await supabase.from("carts").upsert([{
              user_id: user.id,
              items:cart,
              total
             }
            ],   { onConflict: ["user_id"] }   )
            if(error){
              console.error("error syncing cart:",error.message);
            }
          }
          syncCart();
         }, [user,cart,total])


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
          SetCart,
          ratings,
          rateProduct,
          setDetails
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export default CartProvider;

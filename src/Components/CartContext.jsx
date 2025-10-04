// import { createContext, useState, useEffect } from "react";
// import { supabase } from "../supabaseClients";
// import { imageMap } from "./Product";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, SetCart] = useState([]);
//   const [isloggedin, setIsloggedin] = useState(false);
//   const [user, setUser] = useState(null);
//   const [total, setTotal] = useState(0);
//   const [ratings, setRatings] = useState({});
//   const [details, setDetails] = useState({});
//   const [hasLoaded, setHasLoaded] = useState(false); // ✅ prevent overwriting

//   const addToCart = (product) => {
//     SetCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1, img: imageMap[product.img] }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     SetCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, change) => {
//     SetCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId
//           ? { ...item, quantity: Math.max(1, item.quantity + change) }
//           : item
//       )
//     );
//   };

//   const rateProduct = async (productId, rating) => {
//     if (!user) return;
//     setRatings((prev) => ({ ...prev, [productId]: rating }));

//     const { error } = await supabase.from("ratings").upsert(
//       [
//         {
//           user_id: user.id,
//           product_id: productId,
//           rating,
//         },
//       ],
//       { onConflict: ["user_id", "product_id"] }
//     );

//     if (error) console.error("Error saving rating:", error.message);
//   };

//   // recalc total whenever cart updates
//   useEffect(() => {
//     const u = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setTotal(u);
//   }, [cart]);

//   // load cart once when user logs in
//   useEffect(() => {
//     const loadCart = async () => {
//       if (!user) return;

//       const { data, error } = await supabase
//         .from("carts")
//         .select("items, total")
//         .eq("user_id", user.id)
//         .single();

//       if (error) {
//         console.error("Error loading cart:", error.message);
//         return;
//       }

//       if (data) {
//         SetCart(data.items || []);
//         setTotal(data.total || 0);
//       }
//       setHasLoaded(true); // ✅ now safe to sync
//     };

//     loadCart();
//   }, [user]);

//   // sync only after load finished
//   useEffect(() => {
//     const syncCart = async () => {
//       if (!user || !hasLoaded) return;

//       const { error } = await supabase.from("carts").upsert(
//         [
//           {
//             user_id: user.id,
//             items: cart,
//             total,
//           },
//         ],
//         { onConflict: ["user_id"] }
//       );

//       if (error) {
//         console.error("Error syncing cart:", error.message);
//       }
//     };

//     syncCart();
//   }, [user, cart, total, hasLoaded]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         isloggedin,
//         setIsloggedin,
//         user,
//         setUser,
//         total,
//         SetCart,
//         ratings,
//         rateProduct,
//         setDetails,
        
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClients";
import { imageMap } from "./Product";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
const [cart, SetCart] = useState([]);
const [isloggedin, setIsloggedin] = useState(false);
const [user, setUser] = useState(null);
const [total, setTotal] = useState(0);
const [ratings, setRatings] = useState({});
const [details, setDetails] = useState({});
const [hasLoaded, setHasLoaded] = useState(false); // ✅ prevent overwriting

// ✅ Add item to cart, but store only img key (string) in Supabase
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
return [
...prevCart,
{
...product,
quantity: 1,
img: product.img, // store only the string key
},
];
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


const { error } = await supabase.from("ratings").upsert(
  [
    {
      user_id: user.id,
      product_id: productId,
      rating,
    },
  ],
  { onConflict: ["user_id", "product_id"] }
);

if (error) console.error("Error saving rating:", error.message);


};

// ✅ recalc total whenever cart updates
useEffect(() => {
const u = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
setTotal(u);
}, [cart]);

// ✅ load cart once when user logs in
useEffect(() => {
const loadCart = async () => {
if (!user) return;

  const { data, error } = await supabase
    .from("carts")
    .select("items, total")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error("Error loading cart:", error.message);
    return;
  }

  if (data) {
    // 🔑 resolve image keys back into real imports
    const resolvedItems = (data.items || []).map((item) => ({
      ...item,
      img: imageMap[item.img] || item.img, // fallback if missing
    }));

    SetCart(resolvedItems);
    setTotal(data.total || 0);
  }
  setHasLoaded(true);
};

loadCart();


}, [user]);

// ✅ sync only after cart is loaded
useEffect(() => {
const syncCart = async () => {
if (!user || !hasLoaded) return;


  // 🔑 save only image keys, not actual imported image objects
  const plainCart = cart.map((item) => ({
    ...item,
    img: Object.keys(imageMap).find((key) => imageMap[key] === item.img) || item.img,
  }));

  const { error } = await supabase.from("carts").upsert(
    [
      {
        user_id: user.id,
        items: plainCart,
        total,
      },
    ],
    { onConflict: ["user_id"] }
  );

  if (error) {
    console.error("Error syncing cart:", error.message);
  }
};

syncCart();


}, [user, cart, total, hasLoaded]);

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
setDetails,
}}
>
{children}
</CartContext.Provider>
);
};

export default CartProvider;

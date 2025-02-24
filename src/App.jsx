import React, { useReducer } from 'react';

import ShoppingWebsite from './pages/ShoppingWebsite'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import ShoppingApp from './pages/ShoppingApp';
import Hero from './pages/Hero';
import Favourite from './pages/Favourite';
import Shoppingcenter from './pages/Shoppingcenter';
import Fashion from './pages/Fashion';
import Signup from './pages/Signup'
import Lifestyle from './pages/Lifestyle';
import Tees from './pages/Tees';
import Coats from './pages/Coats';
import Hoodies from './pages/Hoodies';
import Cart from './pages/Cart';





function App() {
//  const initialState ={
//     count:0

//  }

//  switch (state = initialState , action) {
//   case "INCREMENT":
//   count : state -1
    
//     break;
 
//   default:
//     break;
//  }

  return (
    <>
            
  
     <BrowserRouter>
   
      
      
      <Routes>
  
      <Route path='/favorite' element={<ShoppingWebsite/>}/>
      <Route path='/shoppingapp' element={<ShoppingApp/>}/>
      <Route path='/hero' element={<Hero/>}/>
      <Route path='/' element={<Favourite/>}/>
      <Route path='/fashion' element={<Fashion/>}/>
      <Route path='/lifestyle' element={<Lifestyle/>}/>
      <Route path='/shoppingcenter' element={<Shoppingcenter/>}/>
      <Route path='/tees' element={<Tees/>}/>
      <Route path='/coats' element={<Coats/>}/>
      <Route path='/hoodies' element={<Hoodies/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
     

      </Routes>
      
     
      </BrowserRouter>
     
    </>
  )
}

export default App

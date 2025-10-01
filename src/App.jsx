import ShoppingWebsite from './pages/ShoppingWebsite'
import './App.css'
import { BrowserRouter as Router,  Routes, Route, BrowserRouter} from 'react-router-dom';
import ShoppingApp from './pages/ShoppingApp';

import Favourite from './pages/Favourite';
import Fashion from './pages/Fashion';
import Signup from './pages/Signup'
import Lifestyle from './pages/Lifestyle';
import Tees from './pages/Tees';
import Coats from './pages/Coats';
import Hoodies from './pages/Hoodies';
import Cart from './pages/Cart';
import Payment from './Components/Payment';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {

  return (
    <>
            

     <BrowserRouter>

  
      <Routes>
      <Route path='/' element={<Favourite/>}/>
      <Route path='/favorite' element={<ShoppingWebsite/>}/>
      <Route path='/shoppingapp' element={<ShoppingApp/>}/>
      <Route path='/fashion' element={<Fashion/>}/>
      <Route path='/lifestyle' element={<Lifestyle/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/tees' element={<Tees/>}/>
      <Route path='/coats' element={<Coats/>}/>
      <Route path='/hoodies' element={<Hoodies/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App

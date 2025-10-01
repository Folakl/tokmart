import one from '../assets/cib_f-secure.png';
import three from '../assets/LET’S EXPLORE UNIQUE CLOTHES..png';
import four from '../assets/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import lifestylebg from '../assets/How-To Guide – Creating A Stunning Flat Lay With Accessories For E-Commerce.jpeg';
import fashionbg from '../assets/fashion.jpeg';
import hoodiesbg from '../assets/Hoodies.jpeg';
import teesbg from '../assets/Fashion E-Commerce App Design.jpeg';
import coatsbg from '../assets/💗💗💗.jpeg';
import { CartContext } from './CartContext';
import { useContext, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsopen] = useState(false);
  const { isloggedin } = useContext(CartContext);

  const backgroundImage =
    location.pathname === "/lifestyle" ? lifestylebg
    : location.pathname === "/coats" ? coatsbg
    : location.pathname === "/fashion" ? fashionbg
    : location.pathname === "/hoodies" ? hoodiesbg
    : location.pathname === "/tees" ? teesbg
    : location.pathname === "/shoppingcenter" ? hoodiesbg
    : location.pathname === "/shoppingapp" ? hoodiesbg
    : location.pathname === "/favorite" ? hoodiesbg
    : four;

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleMenu = () => {
    setIsopen(!isOpen);
  };
  const handleShop=()=>{
    navigate("/signup")
  }

  return (
    
      <div className="bg-white rounded-md h-[630px]">
        {/* Navbar section */}
        <div className="fixed w-full top-0">
          <nav className="flex justify-between bg-[grey] px-2">
            <div className="flex gap-2 mt-2">
              <img src={one} alt="" className="w-[30px] h-[40px]" />
              <h3 className="text-[30px] font-bold">TokMart</h3>
            </div>

            {/* Desktop menu */}
            <div className="flex-wrap gap-10 ml-2 font-bold lg:flex md:flex hidden">
              <Link to="/home"><h3 className="mt-5 cursor-pointer">HOMEPAGE</h3></Link>
              <Link to="/fashion"><h3 className="mt-5 cursor-pointer">FASHION</h3></Link>
              <Link to="/favorite"><h3 className="mt-5 cursor-pointer">FAVOURITE</h3></Link>
              <Link to="/lifestyle"><h3 className="mt-5 cursor-pointer">LIFESTYLE</h3></Link>
            </div>

            <div className="lg:flex md:flex hidden gap-5">
              <Link to="/cart" className="mt-5">
                <ion-icon name="cart-sharp" size="large"></ion-icon>
              </Link>
              <button
                className="w-[120px] mt-3 py-2 text-white h-[38px] rounded-md bg-black cursor-pointer"
                onClick={handleSignup}
              >
                SIGN UP
              </button>
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden md:hidden flex">
              <Link to="/cart" className="mt-5">
                <ion-icon name="cart-sharp" size="large"></ion-icon>
              </Link>
              <div
                className="cursor-pointer mt-5 lg:hidden md:hidden grid"
                onClick={handleMenu}
              >
                {isOpen ? (
                  <ion-icon name="close-outline" size="large"></ion-icon>
                ) : (
                  <ion-icon name="menu-outline" size="large"></ion-icon>
                )}
              </div>
            </div>
          </nav>

          {isOpen && (
            <div className="bg-[#312424] inset-0 grid z-20 text-start w-full p-3 text-white font-bold">
              <Link to="/home"><h3 className="mt-5 cursor-pointer">HOMEPAGE</h3></Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/lifestyle">Lifestyles</Link>
              <Link to="/tees">Tees</Link>
              <Link to="/coats">Coats</Link>
              <Link to="/favorite">Favorite</Link>
              <Link to="/hoodies">Hoodies</Link>
              <Link to="/signup">
                <button className="w-[120px] mt-2 text-white h-[40px] rounded-md bg-black">
                  SIGN UP
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Second Container */}
        <div className="bg-[#ebeaea] h-[620px] w-full flex  rounded-md">
          <div className="p-20 w-[600px]">
            <img src={three} alt="" className="w-[400px] h-[350px] my-5" />
            <h3 className="my-5 text-[20px]">
              Live for Influential and Innovative fashion!
            </h3>
            <Link to="/shoppingcenter">
              <button className="bg-black text-white rounded-md h-[50px] w-[150px] animate-bounce" onClick={handleShop}>
                SHOP NOW
              </button>
            </Link>
          </div>

          <div className="lg:grid md:grid hidden items-center lg:mr-[220px] md:mx-[20px] mx-0 ">
            <img
              src={backgroundImage}
              alt="show me"
              className="lg:h-[400px] lg:w-[400px] md:w-[300px] md:h-[300px] w-[300px] h-[300px] rounded-full "
            />
          </div>
        </div>
      </div>
    )
 
};

export default Navbar;

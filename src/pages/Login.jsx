import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClients";
import { CartContext } from "../Components/CartContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showpassword, setShowpaasword] = useState(false);
  const [loading,setLoading] = useState(false)
  const {isloggedin,setIsloggein} =useContext(CartContext)
  const navigate = useNavigate();

  const handleShowpassword = () => {
    setShowpaasword(!showpassword);
  };

  const handleSignin = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      console.log("login successful", data);
      alert("login sucessfull")
      setIsloggein(true)
      navigate("/");
    } catch (error) {
      console.error("error:", error.message);
      alert(error.message);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="w-full bg-[#43433c] h-screen fixed p-10">
      <h3 className="text-[30px] text-white text-center font-bold pb-5">
        Welcome Back
      </h3>
      <div className="lg:w-[400px] md:w-[400px] w-[350px] justify-self-center mx-10 py-5 h-fit bg-white rounded-2xl">
        <h3 className="mt-5 text-[30px] text-center font-extrabold">Login</h3>
        <div className="justify-self-center px-10">
          {/* Email */}
          <h3 className="mt-3 font-bold">Email</h3>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-2 shadow-md border-black w-[250px] h-[50px] rounded-lg outline-none p-2 text-black"
            placeholder="Enter your Email Address"
          />

          {/* Password */}
          <h3 className="mt-3 font-bold">Password</h3>
            <div className="relative border-black  w-[250px] border-2 rounded-md">
            {
              showpassword? (<input type={showpassword? "text": "password"}onChange={(e)=>{setPassword(e.target.value)}} value={password} className="  h-[50px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Password"/>):
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="   h-[50px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Password"/>
            }
            
              
               <ion-icon name={showpassword? "eye-outline" : "eye-off-outline"}  className="absolute top-3 left-[220px] cursor-pointer"  onClick={handleShowpassword}></ion-icon>
             
            
          </div>


          {/* Login Button */}
         {loading? ( <button
            className="w-[250px] h-[40px] bg-[#43433c] outline-none rounded-lg mt-5 cursor-progress font-bold text-white"
            onClick={handleSignin}
          >
            Logging in
          </button>): (
             <button
            className="w-[250px] h-[40px] bg-[#43433c] outline-none rounded-lg mt-5 cursor-pointer font-bold text-white"
            onClick={handleSignin}
          >
            Login
          </button>
          )}

          <h3 className="text-sm pt-3 text-center">
            Forgot password?{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Reset password
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClients";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading]= useState(false)
  
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async (e) => {
    if (email === "" || password === "" || name === ""){
        alert("Enter missing credentials")
        return
      }
    setLoading(true)
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name }, 
        },
      });

       if (error) throw error;
  
      
      console.log("Signup successful:", data);
      alert("Signup successful! Check your email for verification.");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
    finally{
      setLoading(false)
    }
  };

  const handleSignin = () => {
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-center p-20 bg-[#43433c] h-screen fixed">
      <div className="w-[400px] mx-10 py-5 h-fit bg-white rounded-2xl">
        <h3 className="mt-5 text-[30px] text-center font-extrabold">Signup</h3>
        <div className="justify-self-center px-10">
          <h3 className="mt-3 font-bold">Name</h3>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border-2 shadow-md border-black w-[250px] h-[45px] rounded-lg outline-none p-2 text-black"
            placeholder="Enter your Name"
          />

          <h3 className="mt-3 font-bold">Email</h3>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-2 shadow-md border-black w-[250px] h-[50px] rounded-lg outline-none p-2 text-black"
            placeholder="Enter your Email Address"
          />

          <h3 className="mt-3 font-bold">Password</h3>
      
          <div className="relative border-black  w-[250px] border-2 rounded-md">
            {
              showPassword? (<input type={showPassword? "text": "password"}onChange={(e)=>{setPassword(e.target.value)}} value={password} className=" w-[220px] h-[45px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Password"/>):
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="   h-[45px] w-[220px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Password"/>
            }
            <ion-icon name={showPassword? "eye-outline" : "eye-off-outline"}  className="absolute top-3 left-[220px] cursor-pointer"  onClick={handleShowPassword}></ion-icon>
          </div>



        {loading? (  <button
            className="w-[250px] h-[40px] bg-[#43433c] outline-none rounded-lg mt-5 cursor-progress font-bold text-white"
            onClick={handleSignup}
          >
            Signing up
          </button>): (  <button
            className="w-[250px] h-[40px] bg-[#43433c] outline-none rounded-lg mt-5 cursor-pointer font-bold text-white"
            onClick={handleSignup}
          >
            Sign up
          </button>)}

          <h3 className="text-sm pt-3">
            Already have an account{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={handleSignin}
            >
              Sign in here
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;

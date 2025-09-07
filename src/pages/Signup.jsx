import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name,SetName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("")
  const navigate = useNavigate("");
  
  const handleSignup=()=>{
    if(name === ""|| password === ""|| email === ""){
      alert("fil up necessary units")
    }
    else{
      navigate("/")
    }
  }
  return (
    <div className="justify-self-center ">
      <div className="w-[500px] md:h-[500px] h-screen py-10 lg:h-[500px] bg-black rounded-2xl text-white  mx-10">
        <h3 className="mt-5 text-[30px] text-center">Login</h3>
        <div className="mx-[150px]">
          <h3 className="my-3">Name</h3>
          <input type="text" onChange={(e)=>{SetName(e.target.value)}} value={name} className="w-[250px] h-[30px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Name" />

          <h3 className="my-3">Password</h3>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="w-[250px] h-[30px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Password"/>

          <h3 className="my-3">Email</h3>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="w-[250px] h-[30px] rounded-lg outline-none p-2 text-black" placeholder="Enter your Email Address" />

          <button className="w-[250px] h-[40px] bg-[blue] outline-none rounded-lg mt-5 cursor-pointer"onClick={handleSignup}> Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;


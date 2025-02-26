import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[500px] md:h-[1100px] h-[720px] lg:h-[700px] bg-black rounded-md text-white  mx-10">
        <h3 className="mt-5 text-[30px] text-center">Login</h3>
        <div className="mx-[150px]">
          <h3 className="my-3">Name</h3>
          <input type="text" className="w-[200px] h-[30px] rounded-lg border-2 border-[red]" />

          <h3 className="my-3">Password</h3>
          <input type="password" className="w-[200px] h-[30px] rounded-lg" />

          <h3 className="my-3">Email</h3>
          <input type="email" className="w-[200px] h-[30px] rounded-lg" />

          <button className="w-[200px] h-[40px] bg-[blue] rounded-lg mt-5"> Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;


import React, { useState } from 'react'
import Login from './Login';
import SignUp from './Signup';

function Header() {

  const[loginOpen,setLoginOpen]= useState(false);
  const[signupOpen,setSignUpOpen]= useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold cursor-pointer">Catch-up</div>

      <div className="flex items-right space-x-4 mr-5">
       
        {/* <img
          src="/avatar.png"
          alt="avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
        /> */}

        <span
          onClick={() => setLoginOpen(true)}
          className="cursor-pointer hover:underline"
        >
          Login
        </span>

        <span className="border-l border-white h-6"></span> {/* vertical line */}

        <span
          onClick={() => setSignUpOpen(true)}
          className="cursor-pointer hover:underline"
        >
          Sign Up
        </span>
      </div>

      <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignUp isOpen={signupOpen} onClose={() => setSignUpOpen(false)} />
      
    </div>
  )
}

export default Header;

import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg' alt=''/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0   text-white bg-opacity-90'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && 
        <input type='text' placeholder='Enter Your FUll Name' className='p-2  w-full bg-gray-700 my-4 rounded-sm h-auto'/>
        }
        <input type='text' placeholder='Email Address or Mobile Number' className='p-2  w-full bg-gray-700 my-4 rounded-sm h-auto'/>
        <input type='password' placeholder='Enter Your Password' className='p-2  w-full  bg-gray-700 my-4 rounded-sm h-auto' />
        <div>
            <button className='p-2 my-6 bg-red-600 w-full rounded-sm h-auto'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        </div>
        <p className='text-red-700 py-4 cursor-pointer hover👍' onClick={toggleSignInForm}>{isSignInForm? "New? Sign Up To Create Account" : "LogIn To Watch and Enjoy"}</p>
      </form>
      
    </div>

  )
}

export default Login;
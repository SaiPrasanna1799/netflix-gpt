import React from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../Utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = (() => {
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/"); // sign out ayithey home poage ki raavali 
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  })
  return (
    <div className='w-screen absolute px-8 py-2 bg-radient-to-b from-black z-10 flex justify-between'>
      <img className = "w-44" src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='LOGO'/>
      {user ||
      (<div className='flex p-2'>
        <img className='w-8 h-8 m-2' src={user?.photoURL} alt='ICON'/>
        <button onClick = {handleSignOut} className='font-bold'>(Sign Out)</button>
      </div>
    )}
    </div>
  )
}
export default Header
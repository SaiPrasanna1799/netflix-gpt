import React, { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom' // idi main component kabatti ikkade routing ni import cheskuntunnam
import { RouterProvider } from 'react-router-dom'
import { auth } from '../Utilities/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utilities/userSLice';

const Body = () => {
    const dispatch = useDispatch() //dispatch hook for to disptach an action
    // const navigate = useNavigate() //
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
        
    ])

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const {uid,email,displayName,photoURL} = user;
    // https://firebase.google.com/docs/reference/js/auth.user
    // ...
    dispatch(addUser(
        {
            uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    // navigate("/browse");
  } else {
    // User is signed out
    dispatch(removeUser());
    // navigate("/");
    // ...
  }
});
    },[]);

  return (
    <div>
        {/* so, manam path use chestunnam kabatti,ikkada RouterProvider ni use cheskovali . daaniki mana appRouterni ivvali */}
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
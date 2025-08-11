import { useState,useRef } from 'react'
import Header from './Header';
import { checkValidate } from '../Utilities/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utilities/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null) //creating  a useref hook for email and password as well
  const password  = useRef(null); 
  const name = useRef(null);

  const handleFormData = () =>{
    //here need to validate the form data 
    //for this I will create a utility file and write my logic there //if the validations fails it gives the error msg
    // checkValidate(email,password) //calling the function with email and passowrd 
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidate(email.current.value,password.current.value);
    console.log(message)
    setErrorMessage(message)
    if(message) return; //ikakda msg anedi true ayite, we need to return the msg

    if(!isSignInForm){
      //negates the value not sign in means, sign up 
      //sign up form login goes here
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, { //above user
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/193638372?s=400&u=ff6bcac1ac757503770523535e43c2637c74d8a9&v=4"
}).then(() => {
  // Profile updated!
  // ...
  navigate("/browse")
}).catch((error) => {
  // An error occurred
  setErrorMessage(error.message);
  // ...
});
    console.log(user)
    navigate("/browse")
    // ... above is a promise 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  }); // we copied this code from firebase authenetication
    }
    else{
      //sign in form login goes here
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);

  });
    }
  }
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg' alt=''/>
      </div>
      <form onSubmit = {(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0   text-white bg-opacity-90'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input  type='text' placeholder='Enter Your FUll Name' className='p-2  w-full bg-gray-700 my-4 rounded-sm h-auto'/>
        )}
        <input ref = {email} type='text' placeholder='Email Address or Mobile Number' className='p-2  w-full bg-gray-700 my-4 rounded-sm h-auto'/>
        <input ref = {password} type='password' placeholder='Enter Your Password' className='p-2  w-full  bg-gray-700 my-4 rounded-sm h-auto' />
        <div>
            <button className='p-2 my-6 bg-red-600 w-full rounded-sm h-auto' onClick={handleFormData}>{isSignInForm? "Sign In" : "Sign Up"}</button>
        </div>
        <p className='text-red-950 text-lg font-bold'>{errorMessage}</p> 
        {/*  creating a error msg to show when user enters a invalid email or password and for this errorMessage need to create a state varible to show on the UI*/}
        <p className='text-red-700 py-4 cursor-pointer hover👍' onClick={toggleSignInForm}>{isSignInForm? "New? Sign Up To Create Account" : "LogIn To Watch and Enjoy"}</p>
      </form>
      
    </div>

  )
}

export default Login;
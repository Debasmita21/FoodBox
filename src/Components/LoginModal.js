import React, { useRef, useState } from 'react'
import { X } from 'lucide-react';
import { checkValidLoginFormData } from '../utils/validation';

const LoginModal = ({onClose}) => {

  const modalRef=useRef();
  const closeLoginModal=(e)=>{
    if(modalRef.current === e.target){
        onClose();
    }
  }
  const [isSignInForm,setIsSignInForm]=useState(true);
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)


  const toggleSignIn=()=>{
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick=()=>{
    //validate form data
    //checkValidLoginFormData(email,password)
    console.log(email,password)
    const message= checkValidLoginFormData(email.current.value,password.current.value)
    seterrorMessage(message)
  }
  const [errorMessage,seterrorMessage]=useState()


  return (
    <div ref={modalRef} onClick={closeLoginModal} className='fixed inset-0 bg-blue bg-opacity-30 backdrop-blur-sm 
        flex justify-center items-center'>
    
        <div className='items-start'>
           <button onClick={onClose} className="pb-[500px] pl-96"><X size={30}/></button>
           
        </div>
           <form onSubmit={(e)=>e.preventDefault()} className="bg-white px-16 absolute w-full md:w-3/12 max-h-full
           my-32  mx-auto left-0 right-0 text-black bg-opacity-80 flex-shrink-0">

              <h1 className="font-bold text-2xl my-4 p-3">{isSignInForm?"Sign In":"Sign Up"}</h1>

              {!isSignInForm &&<input type="text" placeholder="Full name" 
               className="p-3 my-3 w-full rounded-sm bg-[#333]" />}

              <input ref={email} type="text" placeholder="Email or phone number" 
               className="p-3 my-3 w-full rounded-sm bg-[#333]" />

              <input ref={password} type="password" placeholder="Password" 
                className="p-3 my-3 w-full rounded-sm bg-[#333]"/>

                <p className="text-red-600">{errorMessage}</p>

                <button onClick={handleButtonClick} type="submit" className="p-2 my-8 w-full font-bold
                 bg-rose-800 rounded-sm"> {isSignInForm?"Sign In":"Sign Up"}</button>
                <div className='mb-6'>
                 <span className="cursor-pointer text-blue-700 " onClick={toggleSignIn}>
                 {isSignInForm?"New to Netflix? Sign up now.":"Already registred. Sign in now."}</span>
                 </div>
        <div>
        
        </div>
        
        
      </form>
      
      </div> 
    
  )
}

export default LoginModal
import React, { useRef, useState } from 'react'
import { X } from 'lucide-react';

const LoginPopup = ({onClose}) => {

  const modalRef=useRef();
  const closeLoginPopup=(e)=>{
    if(modalRef.current === e.target){
        onClose();
    }
  }
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignIn=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div ref={modalRef} onClick={closeLoginPopup} className='fixed inset-0 bg-blue bg-opacity-30 backdrop-blur-sm 
        flex justify-center items-center'>
    
        <div className='items-start'>
           <button onClick={onClose} className="pb-[500px] pl-96"><X size={30}/></button>
           
        </div>
           <form className="bg-white px-16 absolute w-full md:w-3/12 h-3/4
           my-32  mx-auto left-0 right-0 text-black bg-opacity-80 flex-shrink-0">

              <h1 className="font-bold text-2xl my-6 p-3">{isSignInForm?"Sign In":"Sign Up"}</h1>

              {!isSignInForm &&<input type="text" placeholder="Full name" 
               className="p-3 my-3 w-full rounded-sm bg-[#333]" />}

              <input type="text" placeholder="Email or phone number" 
               className="p-3 my-3 w-full rounded-sm bg-[#333]" />

              <input  type="password" placeholder="Password" 
                className="p-3 my-3 w-full rounded-sm bg-[#333]"/>
                <button type="submit" className="p-2 my-8 w-full font-bold
                 bg-rose-800 rounded-sm"> {isSignInForm?"Sign In":"Sign Up"}</button>

                 <span className="cursor-pointer text-blue-700" onClick={toggleSignIn}>
                 {isSignInForm?"New to Netflix? Sign up now.":"Already registred. Sign in now."}</span>

        <div>
        
        </div>
        
        
      </form>
      
      </div> 
    
  )
}

export default LoginPopup
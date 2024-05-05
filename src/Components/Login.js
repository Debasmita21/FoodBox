import Header from "./Header"
import {background_image} from "../utils/constants"
import LoginModal from "./LoginModal"
import { useState } from "react"

const Login = (props) => {
  const [showLoginModal,setshowLoginModal] =useState(false)
  return (
    <div>
    <Header setshowLoginModal={setshowLoginModal} />

    <div className="absolute">
      <img className="brightness-75 w-screen h-screen" src= {background_image} alt="img"/>
      </div>
      <div className="my-36 relative">
        <h1 className=" text-center text-white text-8xl italic font-bold">Food Box</h1>
      
        <h1 className=" text-center mt-8 text-white text-4xl">Find the best restaurants, cafés and bars in India</h1>
      </div>
      {showLoginModal &&<LoginModal onClose={()=>setshowLoginModal(false)} />}
    </div>
    
    
  )
}

export default Login
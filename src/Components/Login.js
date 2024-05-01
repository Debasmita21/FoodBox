import Header from "./Header"
import {background_image} from "../utils/constants"
import LoginPopup from "./LoginPopup"
import { useState } from "react"

const Login = (props) => {
  const [showLoginPopup,setshowLoginPopup] =useState(false)
  return (
    <div>
    <Header setshowLoginPopup={setshowLoginPopup} />

    <div className="absolute">
      <img className="brightness-75 w-screen h-screen" src= {background_image} alt="img"/>
      </div>
      <div className="my-36 relative">
        <h1 className=" text-center text-white text-4xl italic font-bold">Food Box</h1>
      
        <h1 className=" text-center text-white text-4xl">Find the best restaurants, cafés and bars in India</h1>
      </div>
      {showLoginPopup &&<LoginPopup onClose={()=>setshowLoginPopup(false)} />}
    </div>
    
    
  )
}

export default Login
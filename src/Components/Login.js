import Header from "./Header"
import {background_image} from "../utils/constants"
const Login = () => {
  return (
    <div>
    <Header />
    <div className="">
      <img className=" brightness-75 w-screen h-screen" src= {background_image} alt="img"/>
      <p>Find the best restaurants, cafés and bars in India</p>
    </div>
    
    </div>
  )
}

export default Login
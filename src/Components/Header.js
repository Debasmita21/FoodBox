
import { logo } from "../utils/constants"

const Header = ({setshowLoginModal}) => {
  
  return (
    
    <div className="flex justify-between bg-rose-800">
    <div className="">
    <img className="h-[45px] m-2" src={logo} alt="logo"/>
    </div>
    <div className="">
    <ul className="flex justify-between m-3 p-3 font-bold text-lg">
      <button onClick={()=>setshowLoginModal(true)} className="px-5">Sign In/ Sign Up</button>
      <li>Cart</li>
    </ul>
    </div>
    
    </div>
  )
}

export default Header
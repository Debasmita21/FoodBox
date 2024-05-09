
import { logo } from "../utils/constants"
import { Link } from "react-router-dom";
import {CART_LOGO} from "../utils/constants"
import { addUser, removeUser } from "../utils/userSlice"
import { onAuthStateChanged ,signOut} from "firebase/auth";
import { auth } from "../utils/firebase"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


const Header = ({setshowLoginModal}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) =>store.user);
  const handleSignOut = ()=>{

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
          
          const {uid,email,displayName} = user
          dispatch(addUser({
            uid:uid,email:email,displayName:displayName
          }))
          navigate("/browse");
          
        } else {
          // User is signed out
         dispatch(removeUser());
         navigate("/")
        
        }
      });
      // Unsubscribe when component unmounts
      return ()=> unsubscribe();
},[])
  
  return (
    
    <div className="flex justify-between bg-rose-800">
    <div className="">
    <img className="h-[45px] m-2" src={logo} alt="logo"/>
    </div>
    <div className="">
    {!user &&(<ul className="flex justify-between m-3 p-3 font-bold text-lg">
      <button onClick={()=>setshowLoginModal(true)} className="px-5">Sign In/ Sign Up</button>
    </ul>)}  
      
      {user &&(<ul className="flex justify-between m-3 p-3 font-bold text-lg"><li className="px-4">
                   <Link to= "./About">About Us</Link>
                  </li>

                  <li className="px-4">
                  <Link to="./Contact">Contact Us</Link>
                  </li>
                  <li>
                     <Link to="./Cart">
                     <div className="flex justify-between">
                        <span className="font-bold px-1">Cart</span>
                         <img className="w-10 h-10" src={CART_LOGO} alt="cart logo" />
                         
                      </div>
                      </Link>
                    
                    </li>
                    <button className="text-white font-bold m-1" 
                    onClick={handleSignOut}>Sign Out</button>
                    
    </ul>)}
    </div>
    
    </div>
  )
}

export default Header
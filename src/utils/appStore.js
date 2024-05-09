import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import resReducer from "./restaurantListSlice"
const appStore = configureStore(
    {
        reducer :{
            user: userReducer,
            resList:resReducer
            
        }
    }
)
export default appStore

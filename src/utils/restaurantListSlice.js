import { createSlice } from "@reduxjs/toolkit";

const restaurantListSlice = createSlice({
    name:"resList",
    initialState:{
        restauratList:null
    },
    reducers:{
        addRestaurantList:(state,action)=>{
            state.restauratList=action.payload
        }
    }
});
export const {addRestaurantList} =restaurantListSlice.actions
export default restaurantListSlice.reducer;
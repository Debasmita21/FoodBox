import { useDispatch } from "react-redux";
import {addRestaurantList} from "../utils/restaurantListSlice"

import { useEffect } from "react";
import { SWIGGY_API } from "../utils/constants"

const useFetchData=()=>{
    const dispatch = useDispatch();

  const fetchData = async()=>{
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    //console.log(json)
    dispatch(addRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
  };

  useEffect(()=>{
    fetchData();
},[])
}

export default useFetchData
import { CDN_URL } from "../utils/constants"
import {useSelector} from "./RestaurantCard"

const RestaurantCard = ({restaurantsList}) => {
  const{
    cloudinaryImageId,name,cuisines,avgRating,
    costForTwo
    } 
    = restaurantsList?.info
    
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300">
          <img 
          className ="rounded-2xl" 
          alt="restaurant image" 
          src={CDN_URL+
            restaurantsList.info.cloudinaryImageId}
          />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{restaurantsList.info.sla.deliveryTime} minutes</h4>
        </div>
  )
}

export default RestaurantCard
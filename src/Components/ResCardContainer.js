import { useSelector } from "react-redux"
import RestaurantCard from "./RestaurantCard"

const ResCardContainer = () => {
    const restaurants = useSelector(store=>store.resList?.restauratList);
    if(!restaurants)return;
    console.log(restaurants)
    
    
  return (
    <div>
    <div className="flex flex-wrap">
            {restaurants.map((restaurant) => (
                
                 <RestaurantCard key={restaurant.info.id} restaurantsList={restaurant}/>
                
            ))}
          </div>
    </div>
  )
}

export default ResCardContainer
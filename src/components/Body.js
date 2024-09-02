import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";


const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {reslist.map((restaurant) => {
            return (
              <RestaurantCard resData={restaurant} key={restaurant.info.id} />
            );
          })}
        </div>
      </div>
    );
  };

  export default Body;
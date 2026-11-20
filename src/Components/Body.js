import ResCard from "./ResCard";
import resList from "../../utils/mockData";

const Body = () => (
  <div className="body-container">
    <div className="search-bar"></div>

    <div className="filter">
        <button className="filter-btn" onClick={()=>{
      resList = resList.filter((res)=>{
       return res.card.card.info.avgRating >4;
      })
      console.log(resList);
        }}>Top Rated Restraunts </button>
    </div>
    <div className="res-container">

  
  {resList.map((restaurant) => {
    return (
      <ResCard
        resData={restaurant}
        key={restaurant.card.card.info.id}
      />
    );
  })}

    </div>
  </div>
);
export default Body;
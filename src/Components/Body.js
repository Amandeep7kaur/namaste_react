import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// import useEffect if want to use that code 
const Body = () => {

  // if we make state varivale (super powerful react variable) => by using useState Hook

  // => this is normal js let variable , 
  // let listOfRes=[
  //    {
  //       "card": {
  //            "card": {
  //                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //                    "info": {
  //                    "id": "798675",
  //                     "name": "Wow! China",
  //                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
  //                     "costForTwo": "₹400 for two",
  //                     "cuisines": [
  //                     "Chinese",
  //                     "Asian",
  //                     "fastfood",
  //                     "Beverages",
  //                      "Snacks"
  //                    ],
  //                 "avgRating": 4.4,    
  //                }
  //               }
  //           }
  //         },
  //         {
  //       "card": {
  //            "card": {
  //                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //                    "info": {
  //                    "id": "1035387",
  //                     "name": "Boba Bhai - Bubble Tea & Korean Street Food",
  //                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
  //                     "costForTwo": "₹400 for two",
  //                     "cuisines": [
  //                               "Bubble Tea",
  //                               "Burger",
  //                               "Korean",
  //                               "Beverages",
  //                               "Fast Food",
  //                               "Juice and shake"
  //                           ],
  //                 "avgRating": 3.6,    
  //                }
  //               }
  //           }
  //         },
  //         {
  //       "card": {
  //            "card": {
  //                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //                    "info": {
  //                    "id": "798267",
  //                     "name": "KFC",
  //                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
  //                     "costForTwo": "₹400 for two",
  //                     "cuisines": [
  //                     "Chinese",
  //                     "Asian",
  //                     "fastfood",
  //                     "Beverages",
  //                      "Snacks"
  //                    ],
  //                 "avgRating": 4.2,    
  //                }
  //               }
  //           }}
  //  ];

  // local state variable 
  // let [listOfRes,setlistofRes] = useState([{ // declaration of local state variable
  //       "card": {
  //            "card": {
  //                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //                    "info": {
  //                    "id": "798675",
  //                     "name": "Wow! China",
  //                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
  //                     "costForTwo": "₹400 for two",
  //                     "cuisines": [
  //                     "Chinese",
  //                     "Asian",
  //                     "fastfood",
  //                     "Beverages",
  //                      "Snacks"
  //                    ],
  //                 "avgRating": 4.4,    
  //                }
  //               }
  //           }
  //         },
  //        {
  //       "card": {
  //            "card": {
  //                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //                    "info": {
  //                    "id": "1035387",
  //                     "name": "Boba Bhai - Bubble Tea & Korean Street Food",
  //                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
  //                     "costForTwo": "₹400 for two",
  //                     "cuisines": [
  //                               "Bubble Tea",
  //                               "Burger",
  //                               "Korean",
  //                               "Beverages",
  //                               "Fast Food",
  //                               "Juice and shake"
  //                           ],
  //                 "avgRating": 3.6,    
  //                }
  //               }
  //           }
  //         },
  //         {
  //       "card": {
  //            "card": {
  //                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //                    "info": {
  //                    "id": "798267",
  //                     "name": "KFC",
  //                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
  //                     "costForTwo": "₹400 for two",
  //                     "cuisines": [
  //                     "Chinese",
  //                     "Asian",
  //                     "fastfood",
  //                     "Beverages",
  //                      "Snacks"
  //                    ],
  //                 "avgRating": 4.2,    
  //                }
  //               }
  //           }}
  //         ]); 


  const [listOfRestraunts, setlistOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants"
      );

      const json = await response.json();
      console.log(json);
      setlistOfRestraunts(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // conditional rendering .

  return listOfRestraunts.length === 0 ? <Shimmer /> : (
    <div className="body-container">
      <div className="search-container">
        <input type="text"></input>
        <button onClick={() => {
          //  card filter acc to text written in search and update UI
        }} className="search-btn">Search</button>
      </div>


    {/* filter card according to avgRating */}
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestraunts.filter((res) => {
            return res.info.avgRating > 4.5;
          })

          setlistOfRestraunts(filteredList);
          console.log(listOfRestraunts);
        }}>Top Rated Restraunts </button>
      </div>
      <div className="res-container">


        {listOfRestraunts.map((restraunt,index) => {
          return (
            <ResCard
              resData={restraunt}
              key={index}
            />
          );
        })}

      </div>
    </div>
  )
};
export default Body;
import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useState } from "react";

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


const [listOfRestraunts,setlistOfRestraunts] = useState(resList);
  
  return (
  <div className="body-container">
    <div className="search-bar"></div>

    <div className="filter">
        <button className="filter-btn" onClick={()=>{
      const filteredList =listOfRestraunts.filter((res)=>{
       return res.card.card.info.avgRating >4;
      })
      
      setlistOfRestraunts(filteredList);
      console.log(resList);
        }}>Top Rated Restraunts </button>
    </div>
    <div className="res-container">

  
  {listOfRestraunts.map((restaurant) => {
    return (
      <ResCard
        resData={restaurant}
        key={restaurant.card.card.info.id}
      />
    );
  })}

    </div>
  </div>
  )
};
export default Body;
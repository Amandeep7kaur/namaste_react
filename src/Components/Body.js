import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";

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


  const [listOfRestraunts, setlistOfRestraunts] = useState(resList);

  // //  => code not working due to api restriction issue ==================
 const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.api.sh/swiggy/v1/restaurants"
    );

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

useEffect(() => {
  fetchData();
}, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //     );

  //     const json = await response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="body-container">
      <div className="search-bar"></div>

      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestraunts.filter((res) => {
            return res.card.card.info.avgRating > 4;
          })

          setlistOfRestraunts(filteredList);
          console.log(listOfRestraunts);
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
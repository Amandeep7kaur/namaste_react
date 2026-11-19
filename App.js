import React from "react";
import ReactDOM from "react-dom/client";

// AppLayout
//  -> HeaderComp
//    -logo
//    -menu links
//  -> BodyComp
//    -search
//    - restraunt-cards
//  -> Footer
//    - links
//    -copyrights
//    -address
//    -contact us

const Header = () => (
  <div className="header-container">
    <img
      src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
      className="logo"
    ></img>
    <div className="menu">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const resObj  = {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "798675",
                            "name": "Wow! China",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1c9f2532-e845-4537-8c18-2d5fbe887100_798675.JPG",
                            "locality": "Chandni Chowk",
                            "areaName": "Chandni Chowk",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Chinese",
                                "Asian",
                                "fastfood",
                                "Beverages",
                                "Snacks"
                            ],
                            "avgRating": 4,
                            "parentId": "226836",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "577",
                            "promoted": true,
                            "adTrackingId": "cid=787ce569-d32e-4a07-80d1-311525368948~p=0~adgrpid=787ce569-d32e-4a07-80d1-311525368948#ag5~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=798675~bid_price=75~plpr=COLLECTION~eid=a222156d-b77f-4f03-8745-32477b6c90d6~srvts=1795089254568~collid=83637",
                            "sla": {
                                "deliveryTime": 82,
                                "lastMileTravel": 6.1,
                                "serviceability": "SERVICEABLE",
                                "slaString": "75-85 mins",
                                "lastMileTravelString": "6.1 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-19 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "19"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "787ce569-d32e-4a07-80d1-311525368948",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=798675&source=collection&query=Burger",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
  
const ResCard = ({resData}) => {
  const {name,cuisines,avgRating,costForTwo} = resData.card.info;
  return (
    <div className="res-card">
      <img src="https://www.liveeatlearn.com/wp-content/uploads/2025/09/Veggie-Pizza-12.jpg"></img>
      <h2>{name}</h2>
      <p style={{ marginBottom: "none" }}>{cuisines.join(", ")}</p>
      <div className="card-price">
        <span>{costForTwo}</span>
        <span>{avgRating} stars</span>
      </div>
    </div>
  );
};
const Body = () => (
  <div className="body-container">
    <div className="search-bar"></div>
    <div className="res-container">
      <ResCard resData={resObj}/>
  
    </div>
  </div>
);
const AppLayout = () => {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

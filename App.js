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
const resList  = [
            {
                "card": {
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
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "467579",
                            "name": "Louis Burger",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/762f1e61-af01-4aa5-87f1-36e22b9c273d_467579.JPG",
                            "locality": "N Block",
                            "areaName": "Connaught Place",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "Burgers",
                                "American",
                                "Fast Food"
                            ],
                            "avgRating": 4.2,
                            "parentId": "22485",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "2.4K+",
                            "sla": {
                                "deliveryTime": 32,
                                "lastMileTravel": 0.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-35 mins",
                                "lastMileTravelString": "0.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-20 00:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "android/static-assets/icons/big_rx.png",
                                        "description": "bolt!"
                                    },
                                    {
                                        "imageId": "newg.png",
                                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "android/static-assets/icons/big_rx.png",
                                                    "description": "bolt!"
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "theme": "",
                                                    "imageId": "newg.png",
                                                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {},
                                    "textBased": {}
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
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=467579&source=collection&query=Burger",
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
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1035387",
                            "name": "Boba Bhai - Bubble Tea & Korean Street Food",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/24/dee50aa6-1104-41a0-a5ff-4d006db4c91c_f35b5f6d-00b7-43b3-b7cd-5339f0feb3d2.jpg",
                            "locality": "NEHRU ENCLAVE",
                            "areaName": "SHAKARPUR",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Bubble Tea",
                                "Burger",
                                "Korean",
                                "Beverages",
                                "Fast Food",
                                "Juice and shake"
                            ],
                            "avgRating": 4.3,
                            "parentId": "361235",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "765",
                            "promoted": true,
                            "adTrackingId": "cid=cd704fa1-0e45-44fb-a717-7210999e78b6~p=1~adgrpid=cd704fa1-0e45-44fb-a717-7210999e78b6#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1035387~bid_price=14~plpr=COLLECTION~eid=22938505-7efb-404d-bc57-191f1f22e917~srvts=1795089254568~collid=83637",
                            "sla": {
                                "deliveryTime": 46,
                                "lastMileTravel": 6.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "6.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-24 00:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
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
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "cd704fa1-0e45-44fb-a717-7210999e78b6",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1035387&source=collection&query=Burger",
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
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "26719",
                            "name": "KFC",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/11/17/eccce7d6-ea2c-464c-9ac1-54bc2caa87a8_26719.JPG",
                            "locality": "Connaught Place",
                            "areaName": "Connaught Place",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "Burgers",
                                "Fast Food",
                                "Rolls & Wraps"
                            ],
                            "avgRating": 4.3,
                            "parentId": "547",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "12K+",
                            "sla": {
                                "deliveryTime": 17,
                                "lastMileTravel": 0.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "10-15 mins",
                                "lastMileTravelString": "0.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-19 23:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "android/static-assets/icons/big_rx.png",
                                        "description": "bolt!"
                                    },
                                    {
                                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                        "description": "Top-rated for Bolt, based on user votes."
                                    },
                                    {
                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                        "description": "Top-rated for Burger, based on user votes."
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "android/static-assets/icons/big_rx.png",
                                                    "description": "bolt!"
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "theme": "",
                                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                    "description": "Top-rated for Bolt, based on user votes."
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                    "description": "Top-rated for Burger, based on user votes.",
                                                    "theme": ""
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
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
                                    "rating": "4.2",
                                    "ratingCount": "15K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=26719&source=collection&query=Burger",
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
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1035388",
                            "name": "Seoul Burgers & Shakes",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/24/21f4fab9-066e-4318-8287-6927c9f7d5e1_b64edc4d-1838-4445-8d24-6a76951616bd.jpg",
                            "locality": "NEHRU ENCLAVE",
                            "areaName": "SHAKARPUR",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Burger",
                                "Bubble Tea",
                                "Fast Food",
                                "Beverages",
                                "Juice and shake"
                            ],
                            "avgRating": 4.4,
                            "parentId": "588706",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "771",
                            "promoted": true,
                            "adTrackingId": "cid=91d580ad-d221-4153-b0b2-cd6bc07ede54~p=2~adgrpid=91d580ad-d221-4153-b0b2-cd6bc07ede54#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1035388~bid_price=14~plpr=COLLECTION~eid=9c609aa8-98b1-42bb-a6d8-71cebcc8947d~srvts=1795089254568~collid=83637",
                            "sla": {
                                "deliveryTime": 44,
                                "lastMileTravel": 6.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "6.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-24 00:00:00",
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
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "91d580ad-d221-4153-b0b2-cd6bc07ede54",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1035388&source=collection&query=Burger",
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
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "242282",
                            "name": "McDonald's",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8874a698-b2fe-4838-a02f-d4288ba3cdf0_242282.JPG",
                            "locality": "Rajiv Chowk",
                            "areaName": "Connaught Place",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "American",
                                "Fast Food",
                                "Beverages"
                            ],
                            "avgRating": 4.5,
                            "parentId": "630",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "4.0K+",
                            "sla": {
                                "deliveryTime": 18,
                                "lastMileTravel": 0.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "15-20 mins",
                                "lastMileTravelString": "0.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-20 00:45:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "android/static-assets/icons/big_rx.png",
                                        "description": "bolt!"
                                    },
                                    {
                                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                        "description": "Top-rated for Bolt, based on user votes."
                                    },
                                    {
                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                        "description": "Top-rated for Burger, based on user votes."
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "bolt!",
                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                    "description": "Top-rated for Bolt, based on user votes.",
                                                    "theme": ""
                                                }
                                            },
                                            {
                                                "attributes": {
                                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                    "description": "Top-rated for Burger, based on user votes.",
                                                    "theme": ""
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {},
                                    "textBased": {}
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
                                    "rating": "4.2",
                                    "ratingCount": "19K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=242282&source=collection&query=Burger",
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
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1002943",
                            "name": "Burger Brewery",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/8/9/30aaf440-7323-49a0-819d-7cff94abf5b7_657c8e8e-d718-4f20-8f72-c0402fdbfafb.png_compressed",
                            "locality": "CP INNER CIRCLE, DELHI",
                            "areaName": "Connaught Place",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "Burgers",
                                "American"
                            ],
                            "avgRating": 4.4,
                            "parentId": "704814",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "26",
                            "promoted": true,
                            "adTrackingId": "cid=5728503a-d0a2-452e-a6bb-6903d0173bad~p=3~adgrpid=5728503a-d0a2-452e-a6bb-6903d0173bad#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1002943~bid_price=60~plpr=COLLECTION~eid=3dc02e7c-b60d-434e-bf4d-85c7510f01fd~srvts=1795089254568~collid=83637",
                            "sla": {
                                "deliveryTime": 26,
                                "lastMileTravel": 0.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "20-25 mins",
                                "lastMileTravelString": "0.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-11-19 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "newg.png",
                                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                                    "theme": "",
                                                    "imageId": "newg.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
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
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "5728503a-d0a2-452e-a6bb-6903d0173bad",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1002943&source=collection&query=Burger",
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
            }
        ];
  
const ResCard = ({resData}) => {
  const {name,cuisines,avgRating,costForTwo} = resData?.card?.card?.info;
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

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

const restraunt = {};
const ResCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img src="https://www.liveeatlearn.com/wp-content/uploads/2025/09/Veggie-Pizza-12.jpg"></img>
      <h2>{props.resName}</h2>
      <p style={{ marginBottom: "none" }}>{props.cuisine}</p>
      <div className="card-price">
        <span>150</span>
        <span>ratings</span>
      </div>
    </div>
  );
};
const Body = () => (
  <div className="body-container">
    <div className="search-bar"></div>
    <div className="res-container">
      <ResCard resName="Meghana Foods" cuisine="indian, italian" />
      <ResCard resName="American pizzeria" cuisine="pizza, italian" />
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
root.render(<AppLayout />);

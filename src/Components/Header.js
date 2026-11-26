import { useState } from "react";
import { LOGO_URL } from "../../utils/Constants";
import { useState } from "react";

const Header = () => {
const [loginButton, setloginButton] = useState("Login");

  return(<div className="header-container">
    <img
      src={LOGO_URL}
      className="logo"
    ></img>
    <div className="menu">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Cart</li>
        <button onClick={()=>{
         
       loginButton === "Login" ? setloginButton("Logout") : setloginButton("Login");
        }} className="login-btn">{loginButton}</button>
      </ul>
    </div>
  </div>)
};
export default Header;
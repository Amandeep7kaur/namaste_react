import { LOGO_URL } from "../../utils/Constants";

const Header = () => (
  <div className="header-container">
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
      </ul>
    </div>
  </div>
);
export default Header;
import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import amazonlogo from "../Images/amazonlogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* logo */}
      <Link to="/">
        <div className="navbar--Logo">
          <img
            src={amazonlogo}
            alt="amazonlogo"
            style={{ width: "100px", height: "60px" }}
          />
        </div>
      </Link>

      {/* address */}
      <div className="navbar--Address">
        <div className="navbar--Optionaddress">
          <span
            className="navbar--Address--Lineone"
            style={{ marginLeft: "2rem" }}
          >
            Hello,
          </span>
          <span className="navbar--Address--Linetwo">
            <LocationOnIcon />
            Select your address
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="navbar--Search">
        <input className="navbar--SearchInput" type="text" />
        <div className="navbar--Searchicon">
          <SearchIcon />
        </div>
      </div>

      <div className="navbar--Navitems">
        {/* signin */}
        <Link to="/signin" className="navbar--SigninLink">
          <div className="navbar--Login">
            <span className="navbar--Address--Lineone">Hello, Sign In</span>
            <span className="navbar--Address--Linetwo">Account & Lists</span>
          </div>
        </Link>

        {/* orders */}
        <Link to="/orders" className="navbar--OrdersLink">
          <div className="navbar--Orders">
            <span className="navbar--Address--Lineone">Returns</span>
            <span className="navbar--Address--Linetwo">& Orders</span>
          </div>
        </Link>

        {/* cart */}
        <Link to="/cart">
          <div className="navbar--Cart">
            <ShoppingCartIcon className="navbar--Cart--Icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

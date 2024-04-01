import logo from "../../assets/images/Logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaPortrait } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <HiBars3 className="navbar__container-icon" />
        <div className="navbar__container-wrapper">
          <img className="navbar__logo" src={logo} alt="logo" />
          <div className="navbar__container-menu">
            <a>Home</a>
            <a>About Us</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className="navbar__icons-container">
          <IoIosSearch className="navbar__icons-container-icon" />
         <FaPortrait className="navbar__icons-container-icon"></FaPortrait> 
          <CiShoppingCart className="navbar__icons-container-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

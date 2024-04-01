import logo from "../../assets/images/Logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
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
            <Link to="/">
            <a className="navbar__link active">Home</a> </Link>
            <Link to="/about">
            <a className="navbar__link">About</a>
            </Link>
            <Link to="/contact">
            <a className="navbar__link">Contact</a>
            </Link>
          </div>
        </div>
        <div className="navbar__icons-container">
          <IoIosSearch className="navbar__icons-container-icon" /> 
          <CiShoppingCart className="navbar__icons-container-icon" />
        </div>
          <div className="navbar__button">
          <Link to="/signup">
          <button className="navbar___button-signup">Signup</button>
          </Link>
          <Link to="/login">
          <button className="navbar___button-login">Login</button>
          </Link>   
        </div>     
      </div>
    </nav>
  );
}

export default Navbar;

import logo from "../../assets/images/Logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <HiBars3 className="navbar__container-icon" />
        <div className="navbar__container-wrapper">
          <img className="navbar__logo" src={logo} alt="logo" />
          <div className="navbar__container-menu">
            <Link to="/">
              <a className="navbar__link active">Home</a>{" "}
            </Link>
            <Link to="/about">
              <a className="navbar__link">About</a>
            </Link>
            <Link to="/contact">
              <a className="navbar__link">Contact</a>
            </Link>
          </div>
        </div>
        <div className="navbar__icons-container">
          <div className={`search big__screen`}>
            <IoIosSearch
              className="navbar__icons-container-icon"
              
            />
            <input
              type="search"
              placeholder="Search"
              className={`search__input`}
            />
          </div>
          <div className={`search small__screen ${open ? "open2" : "close2"}`}>
            <IoIosSearch
              className="navbar__icons-container-icon"
              onClick={() => {
                setOpen(!open);
              }}
            />
            <input
              type="search"
              placeholder="Search"
              className={`search__input ${open ? "open" : "close"}`}
            />
          </div>
          <CiShoppingCart className="navbar__icons-container-icon" />
        </div>
        {/* <div className="navbar__button">
          <Link to="/signup">
            <button className="navbar___button-signup">Signup</button>
          </Link>
          <Link to="/login">
            <button className="navbar___button-login">Login</button>
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;

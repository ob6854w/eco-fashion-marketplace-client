import logo from "../../assets/images/Logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <HiBars3 className="navbar__container-icon" />
        <div className="navbar__container-wrapper">
          <img className="navbar__logo" src={logo} alt="logo" />
          <div className="navbar__container-menu">
            <Link
              to="/"
              className={`navbar__link ${active ? "active" : ""}`}
              onClick={() => {
                setActive(!false);
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`navbar__link ${active ? "active" : ""}`}
              onClick={() => {

                setActive(!false);
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`navbar__link ${active ? "active" : ""}`}
              onClick={() => {

                setActive(!false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar__icons-container">
          <Link to="/brands_products" className="navbar__link">Marketplace</Link>
          {/* <div className={`search big__screen`}>
            <IoIosSearch className="navbar__icons-container-icon" />
            <input
              type="search"
              placeholder="Search"
              className={`search__input`}
            />
          </div> */}
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
          <Link to="/add-to-cart" className="navbar__icons-container-icon">
            <CiShoppingCart />
          </Link>
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

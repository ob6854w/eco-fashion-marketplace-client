// import logo from "../../assets/images/Logo.png";
// import { CiShoppingCart } from "react-icons/ci";
// import { HiBars3 } from "react-icons/hi2";
// import { IoIosSearch } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import useCurrentUser from "../../hooks/useCurrentUser";
// import "./Navbar.scss";
// import useCart from "../../hooks/useCart";

// const LINKS = [
//   {
//     to: "/",
//     title: "Home",
//   },
//   {
//     to: "/about",
//     title: "About",
//   },
//   {
//     to: "/contact",
//     title: "Contact",
//   },
//   {
//     to: "/login",
//     title: "Login",
//   },
//   {
//     to: "/signup",
//     title: "Signup",
//   },
// ];

// function Navbar() {
//   const { data: cartData } = useCart();
//   const [links, setLinks] = useState(LINKS);

//   const [open, setOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);

//   const { isNotLoggedIn } = useCurrentUser();

//   useEffect(() => {
//     if (isNotLoggedIn) return;

//     const newLinks = [...links];

//     newLinks.pop();
//     newLinks.pop();

//     newLinks.push({
//       to: "/dashboard",
//       title: "Dashboard",
//     });

//     setLinks(newLinks);
//   }, [isNotLoggedIn]);

//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         <HiBars3 className="navbar__container-icon" />
//         <div className="navbar__container-wrapper">
//           <img className="navbar__logo" src={logo} alt="logo" />
//           <div className="navbar__container-menu">
//             {links.map(({ to, title }) => (
//               <Link
//                 to={to}
//                 key={to}
//                 className={`navbar__link ${activeLink === to ? "active" : ""}`}
//                 onClick={() => {
//                   setActiveLink(to);
//                 }}
//               >
//                 {title}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="navbar__icons-container">
//           <Link
//             to="/brands_products"
//             className={`navbar__link ${
//               activeLink === "/brands_products" ? "active" : ""
//             }`}
//             onClick={() => {
//               setActiveLink("/brands_products");
//             }}
//           >
//             Marketplace
//           </Link>

//           <div className={`search small__screen ${open ? "open2" : "close2"}`}>
//             <IoIosSearch
//               className="navbar__icons-container-icon"
//               onClick={() => {
//                 setOpen(!open);
//               }}
//             />
//             <input
//               type="search"
//               placeholder="Search"
//               className={`search__input ${open ? "open" : "close"}`}
//             />
//           </div>
//           <Link to="/add-to-cart" className="navbar__icons-container-icon">
//             <CiShoppingCart />
//             <div className="navbar__icons-container-cart-count">
//               {cartData.data?.length}
//             </div>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import logo from "../../assets/images/Logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import "./Navbar.scss";

const LINKS = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/contact",
    title: "Contact",
  },
  {
    to: "/login",
    title: "Login",
  },
  {
    to: "/signup",
    title: "Signup",
  },
  {
    to: "/brands_products",
    title: "Marketplace",
  },
];

function Navbar() {
  const [links, setLinks] = useState(LINKS);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const { isNotLoggedIn } = useCurrentUser();

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isNotLoggedIn) return;

    const newLinks = [...links];

    newLinks.pop();
    newLinks.pop();

    newLinks.push({
      to: "/dashboard",
      title: "Dashboard",
    });

    setLinks(newLinks);
  }, [isNotLoggedIn]);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* <HiBars3 className="navbar__container-icon" /> */}
        <div className="navbar__container-wrapper">
          <img className="navbar__logo" src={logo} alt="logo" />
          <div className="navbar__container-menu">
            {links.map(({ to, title }) => (
              <Link
                to={to}
                key={to}
                className={`navbar__link ${activeLink === to ? "active" : ""}`}
                onClick={() => {
                  setActiveLink(to);
                }}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar__icons-container">
          <Link
            to="/brands_products"
            className={`navbar__link big__screen ${
              activeLink === "/brands_products" ? "active" : ""
            }`}
            onClick={() => {
              setActiveLink("/brands_products");
            }}
          >
            Marketplace
          </Link>
          {/* <div className={`search big__screen`}>
            <IoIosSearch className="navbar__icons-container-icon" />
            <input
              type="search"
              placeholder="Search"
              className={`search__input`}
            />
          </div> */}
          {/* <div className={`search small__screen ${open ? "open2" : "close2"}`}>
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
          </div> */}
          <div className="navbar__last-cont">
            <Link to="/add-to-cart" className="navbar__icons-container-icon">
              <CiShoppingCart />
            </Link>
            <HiBars3
              className={`navbar__container-icon`}
              onClick={onMenuClick}
            />
          </div>
        </div>

        {/* <div className="navbar__button">
          <Link to="/signup">
            <button className="navbar___button-signup">Signup</button>
          </Link>
          <Link to="/login">
            <button className="navbar___button-login">Login</button>
          </Link>
        </div> */}

        <div className="navbar__small-screen small__screen">
          <div
            id="menu"
            className={`${
              isMenuOpen ? "show" : "close"
            } navbar__small-screen-cont`}
          >
            {links.map(({ to, title }) => (
              <Link
                to={to}
                key={to}
                className={`navbar__link ${activeLink === to ? "active" : ""}`}
                onClick={() => {
                  setActiveLink(to);
                }}
              >
                {title}
              </Link>
            ))}
            {/* <Link
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
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

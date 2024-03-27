import logo from "../../assets/images/E-logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar(){
    return (
        <nav className="navbar">
        <div className="navbar__container"> 
        <Link to="/">
        <img className="navbar__logo" src={logo} alt="logo"/>
        </Link>
        </div>
        </nav>
    )
}




export default Navbar;
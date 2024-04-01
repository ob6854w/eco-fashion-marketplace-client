import Button from "../Button/Button";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container1">
        <div className="footer__container1-list1">
          <p className="footer__container1-list1-head">CONTACT US</p>
          <p>+1 (844) 326-6000</p>
          <p>Email Us</p>
          <p>Mon-Fri 9am-3pm PT</p>
        </div>
        <div className="footer__container1-list1">
          <p className="footer__container1-list1-head">CUSTOMERS</p>
          <p>Start a Return</p>
          <p>Return Policy</p>
          <p>FAQ</p>
          <p>Catalogs and Mailers</p>
          <p>About Group Gifting</p>
        </div>
        <div className="footer__container1-list1">
          <p className="footer__container1-list1-head">COMPANY</p>
          <p>About Us</p>
          <p>Sustainability</p>
          <p>Discover Revive</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
      </div>
      <div className="footer__container2">
        <p>Get the latest new from us</p>
        <div className="footer__container2-wrapper">
          <input type="text" placeholder="Enter your email address" />
          <p>
            By signing up, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
        <Button className="footer__container2-btn">Subscribe</Button>
      </div>
    </div>
  );
}

export default Footer;







 
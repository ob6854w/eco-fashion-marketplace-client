import Input from "../Input/Input";
import icon1 from "../../assets/images/facebook.svg";
import icon2 from "../../assets/images/instagram.svg";
import icon3 from "../../assets/images/twitter.svg";

import "./Footer.scss"
function Footer() {
   return (
    <div className="footer">
         <h2 className="footer__text" > Subscribe To Our Newsletter</h2>
         <p className="footer__content">Be the first to get the latest news about fashion trends, promotions, and much more! </p> 
        <form className="form">
         <Input type="text" name="email" label="Email" placeholder="Your email address" />
          <button>JOIN</button>
       </form>
       <div className="footer__icons">
         <img src={icon1} alt="facebook icon"/>
         <img src={icon2} alt="instagram icon"/>
         <img src={icon3} alt="twitter icon"/>
       </div>
       <div className="footer__copyright">Copyright<p>&copy</p>2024 CEIN. All rights reserved.</div>
      </div> 
   );
};


export default Footer;



 
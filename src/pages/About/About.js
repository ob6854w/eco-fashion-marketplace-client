import "./About.scss";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import founder1 from "../../assets/images/founder1.png";
import founder2 from "../../assets/images/founder2.png";
import founder3 from "../../assets/images/founder3.png";
import founder4 from "../../assets/images/founder4.png";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";
import Founder from "../../components/Founder/Founder";
import Testimonial from "../../components/Testimonial/Testimonial";
function About() {
  return (
    <>
      <div className="about__container">
        <h2 className="about__container-text">ABOUT CEIN</h2>
      </div>
      <div className="about__wrapper">
        <div className="about__wrapper-cont">
          <div className="about__wrapper1">
            <img src={img1} />
          </div>
          <div className="about__wrapper1">
            <img src={img2} />
          </div>
        </div>
      </div>
      <div className="about__wrapper-2">
        <h3>The Founders</h3>
        <div className="about__wrapper-2-founder">
          <Founder name="HM Jawad" src={founder1} />
          <Founder name="Furqan Abid" src={founder2} />
          <Founder name="Abdullah Ah" src={founder3} />
          <Founder name="Abrar Khan" src={founder4} />
        </div>
      </div>
      <div className="about__wrapper-3">
      <h3>Testimonials</h3>
      <div className="about__wrapper-3-testimonial">
          <Testimonial quote="Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries." name="HM Jawad" src={testimonial1} />
          <Testimonial quote="I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again." name="Furqan Abid" src={testimonial2} />
          <Testimonial quote="I ordered 5 shirts from them and received them in no time. The customer support was awesome!" name="Abdullah Ah" src={testimonial3} />
        </div>
      </div>
    </>
  );
}

export default About;

import "./About.scss";
import founder1 from "../../assets/images/founder1.png";
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
          <p>
            Welcome to CEIN, your go-to destination for discovering sustainable
            fashion brands that are making a positive impact on the planet and
            people. Our mission is to curate a collection of 10 exceptional
            brands that prioritize ethical practices, eco-friendly materials,
            and innovative design. At CEIN, we believe in the power of fashion
            to drive positive change. With the growing awareness of
            environmental and social issues within the fashion industry,
            consumers like you are increasingly seeking alternatives that align
            with your values. That's where we come in – we've done the research
            and handpicked 10 brands that are leading the way in sustainable
            fashion. Whether you're looking for timeless classics, cutting-edge
            designs, or everyday essentials, our carefully selected brands offer
            a diverse range of styles to suit every taste and occasion. From
            organic cotton basics to upcycled statement pieces, each brand in
            our collection is committed to transparency, fair labor practices,
            and minimizing their environmental footprint. Join us in supporting
            a more sustainable future for fashion by exploring our curated
            selection of 10 sustainable fashion brands. Together, we can make a
            difference, one stylish and conscious choice at a time. Thank you
            for choosing CEIN!
          </p>
        </div>
      </div>
      <div className="about__wrapper-2">
        <h3>The Founder</h3>
        <div className="about__wrapper-2-founder">
          <Founder name="Oluwayemisi Bakare" src={founder1} />
          {/* <Founder name="Furqan Abid" src={founder2} />
          <Founder name="Abdullah Ah" src={founder3} />
          <Founder name="Abrar Khan" src={founder4} /> */}
        </div>
      </div>
      <div className="about__wrapper-3">
        <h3>Testimonials</h3>
        <div className="about__wrapper-3-testimonial">
          <Testimonial
            quote="Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries."
            name="HM Jawad"
            src={testimonial1}
          />
          <Testimonial
            quote="I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again."
            name="Furqan Abid"
            src={testimonial2}
          />
          <Testimonial
            quote="I ordered 5 shirts from them and received them in no time. The customer support was awesome!"
            name="Abdullah Ah"
            src={testimonial3}
          />
        </div>
      </div>
    </>
  );
}

export default About;

import "./Testimonial.scss";
import quote2 from "../../assets/images/quote2.png";

const Testimonial = ({ src, name, quote }) => {
  return (
    <div className="testimonial">
      <img src={src} className="testimonial__img"/>
      <div className="testimonial__wrapper">
        <img src={quote2}/>
        <p className="testimonial__quote">{quote}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;

import Button from "../Button/Button";
import img1 from "../../assets/images/img_1.png";
import "./BrandDetails.scss";

const BrandDetails = () => {
  return (
    <div className="brand__details">
      <div className="brand__details-image">
        <img src={img1} alt="" />
      </div>
      <div className="brand__details-text">
        <h2>PLAIN WHITE SHIRT</h2>
        <p>
          <del>$69.00</del>$59.00
        </p>
        <p>
          A classic t-shirt never goes out of style. This is our most premium
          collection of shirt. This plain white shirt is made up of pure cotton
          and has a premium finish.
        </p>
        <Button className="brand__details-btn">ADD TO CART</Button>
      </div>
    </div>
  );
};

export default BrandDetails;
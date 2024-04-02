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
      <div className="brand__details-description">
        <h3>Description</h3>
        <p>
          A key objective is engaging digital marketing customers and allowing
          them to interact with the brand through servicing and delivery of
          digital media. Information is easy to access at a fast rate through
          the use of digital communications. Users with access to the Internet
          can use many digital mediums, such as Facebook, YouTube, Forums, and
          Email etc. Through Digital communications it creates a
          Multi-communication channel where information can be quickly exchanged
          around the world by anyone without any regard to whom they are.[28]
          Social segregation plays no part through social mediums due to lack of
          face to face communication and information being wide spread instead
          to a selective audience.
        </p>
      </div>
    </div>
  );
};

export default BrandDetails;
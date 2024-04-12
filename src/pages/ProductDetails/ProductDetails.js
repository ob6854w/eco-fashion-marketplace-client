import img1 from "../../assets/images/img_1.png";
import Button from "../../components/Button/Button";
import { IoStarSharp } from "react-icons/io5";
import "./ProductDetails.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../const";

const BrandDetails = ({ eachProduct }) => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await axios.get(`${REACT_APP_BASE_URL}/products/${id}`);

        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);
  return (
    <>
      <div className="brand__details">
        <div className="brand__details-image">
          <img src={product.image_url} alt="" />
        </div>
        <div className="brand__details-wrapper">
          <div className="brand__details-text">
            <h2>{product.name}</h2>
            <div className="brand__details-stars">
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <span>(15)</span>
            </div>
            <p>
              <span className="fprice">$69.00</span>{" "}
              <span className="nprice">{product.price}</span>
            </p>
            <p>{product.description}</p>
            <p className="products__item-category">
              <span style={{ fontWeight: "bold" }}>Category:</span> {product.category}
            </p>
            <p className="products__item-size">
              <span style={{ fontWeight: "bold" }}>Sizes:</span> {product.sizes}
            </p>
            <p className="products__item-colors">
              <span style={{ fontWeight: "bold" }}>Variants:</span>{" "}
              {product.colors}
            </p>
            <p className="products__item-material">
              <span style={{ fontWeight: "bold" }}>Material:</span>{" "}
              {product.material}
            </p>
            <Link to="/add-to-cart"><Button className="brand__details-btn">ADD TO CART</Button></Link>
            
          </div>
        </div>
      </div>
      <div className="brand__details-container">
        <div className="brand__details-btn1-wrapper">
          <button className="brand__details-btn1">Description</button>
          <button className="brand__details-btn1">Reviews(0)</button>
        </div>
        <div className="brand__details-description">
          <p>
            A key objective is engaging digital marketing customers and allowing
            them to interact with the brand through servicing and delivery of
            digital media. Information is easy to access at a fast rate through
            the use of digital communications.{" "}
          </p>
          <p>
            Users with access to the Internet can use many digital mediums, such
            as Facebook, YouTube, Forums, and Email etc. Through Digital
            communications it creates a Multi-communication channel where
            information can be quickly exchanged around the world by anyone
            without any regard to whom they are.[28] Social segregation plays no
            part through social mediums due to lack of face to face
            communication and information being wide spread instead to a
            selective audience.
          </p>
        </div>
      </div>
    </>
  );
};

export default BrandDetails;

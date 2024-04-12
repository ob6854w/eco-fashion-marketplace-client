import img1 from "../../assets/images/img_1.png";
import Button from "../../components/Button/Button";
import { IoStarSharp } from "react-icons/io5";
import "./BrandDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../const";

const BrandDetails = ({ eachBrand }) => {
  const { id } = useParams();

  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await axios.get(`${REACT_APP_BASE_URL}/brands/${id}`);

        setBrand(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  if (!brand) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="brand__details">
        <div className="brand__details-image">
          <img src={img1} alt="" />
        </div>
        <div className="brand__details-wrapper">
          <div className="brand__details-text">
            <h2>{brand.name}</h2>
            <div className="brand__details-stars">
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <span>(15)</span>
            </div>
            <p>Location: {brand.location}</p>
            <a href={brand.website_url} target="_blank" rel="noreferrer">
              Visit Brand Here
            </a>
            <p>{brand.description}</p>
            <Button className="brand__details-btn">ADD TO CART</Button>
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
            the use of digital communications.
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

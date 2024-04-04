import { Link } from "react-router-dom";
import "./EachBrand.scss";

const EachBrand = ({ src, eachBrand }) => {
  return (
    <Link to={`/brand-details/${eachBrand.id}`}>
      <div className="brand__item">
        <div className="brand__item-cont">
          <img src={src} />
          <p className="brand__item-text">{eachBrand.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default EachBrand;

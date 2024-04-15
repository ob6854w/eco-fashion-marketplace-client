import { Link } from "react-router-dom";
import "./EachBrand.scss";

const EachBrand = ({ src, eachBrand }) => {
  return (
    <a href={eachBrand.website_url} target="_blank" rel="noreferrer noopener" className="brand__item-link">
      <div className="brand__item">
        <div className="brand__item-cont">
          <img src={src} />
          <p className="brand__item-text">{eachBrand.name}</p>
        </div>
      </div>
    </a>
  );
};

export default EachBrand;

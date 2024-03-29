import "./EachBrand.scss";

const EachBrand = ({ text, src }) => {
  return (
    <div className="brand__item">
      <div className="brand__item-cont">
        <img src={src} />
        <p className="brand__item-text">{text}</p>
      </div>
    </div>
  );
};

export default EachBrand;

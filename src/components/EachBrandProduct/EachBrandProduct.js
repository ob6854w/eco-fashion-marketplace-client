import AvatarTab from "../AvatarTab/AvatarTab";
import "./EachBrandProduct.scss";

const EachBrandProduct = ({
  eachBrand,
  eachProduct,
  img,
  brandName,
  img2,
  price,
  className,
  href,
}) => {

  console.log(eachBrand)
  return (
    <div className={className}>
      {/* <a className={className} href={href}> */}
      <img src={img} alt="" className="each__brand_img" />
      <div className="each__brand_wrapper">
        <AvatarTab
          src={img2}
          alt=""
          brandName={brandName}
          className="avatar__tab"
        ></AvatarTab>

        <div className="each__brand_wrapper2">
          <div className="each__brand_wrapper2-cont">
            <p className="">Price</p>
            <p className="">{eachProduct?.price}</p>
          </div>
          <div className="each__brand_wrapper3-cont">
            <button>Pay Now</button>
          </div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default EachBrandProduct;

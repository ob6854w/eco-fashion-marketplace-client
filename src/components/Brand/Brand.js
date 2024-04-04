import EachBrand from "../EachBrand/EachBrand";
import img1 from "../../assets/images/brand1.png";
import img2 from "../../assets/images/brand2.png";
import img3 from "../../assets/images/brand3.png";
import img4 from "../../assets/images/brand4.png";
import img5 from "../../assets/images/brand5.png";
import img6 from "../../assets/images/brand6.png";
import img7 from "../../assets/images/brand7.png";
import img8 from "../../assets/images/brand8.png";

import "./Brand.scss";


const Brand = ({brands}) => {
  return (
    <div className="brand">
        <h3 className="brand__title">Best Brands</h3>
        <div className="brand__wrapper">
            {brands?.map((eachBrand)=>{
                return <EachBrand text="Brand" src={img1} eachBrand={eachBrand}/>
            })}
          
          {/* <EachBrand text="Brand" src={img2}/>
          <EachBrand text="Brand" src={img3}/>
          <EachBrand text="Brand" src={img4}/>
          <EachBrand text="Brand" src={img5}/>
          <EachBrand text="Brand" src={img6}/>
          <EachBrand text="Brand" src={img7}/>
          <EachBrand text="Brand" src={img8}/> */}
        </div>
    </div>
  );
};

export default Brand;

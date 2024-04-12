import EachBrand from "../EachBrand/EachBrand";
import img1 from "../../assets/images/brand1.png";
import "./Brand.scss";


const Brand = ({brands}) => {
  return (
    <div className="brand">
        <h3 className="brand__title">Best Brands</h3>
        <div className="brand__wrapper">
            {brands?.map((eachBrand)=>{
                return <EachBrand src={img1} eachBrand={eachBrand}/>
            })}  
        </div>
    </div>
  );
};

export default Brand;

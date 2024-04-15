import EachBrand from "../EachBrand/EachBrand";
import "./Brand.scss";


const Brand = ({brands}) => {
  return (
    <div className="brand">
        <h3 className="brand__title">Best Brands</h3>
        <div className="brand__wrapper">
            {brands?.map((eachBrand, index)=>{
              return <EachBrand key={index} src={eachBrand.image_url} eachBrand={eachBrand}/>
            })}  
        </div>
    </div>
  );
};

export default Brand;

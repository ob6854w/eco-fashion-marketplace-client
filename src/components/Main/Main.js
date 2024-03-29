import image1 from "../../assets/images/Product 1.png";
import image2 from "../../assets/images/Product2.png";
import "./Main.scss"
function Main() {
    return (
       <div className="main">
        <div className="main__container">    
        <h2 className="main__container-heading"> PRODUCTS </h2>
        <div className="main__card-container">
        <div className="main__card-wrapper">
            <img className="main__card-wrapper--image" src={image1} alt="image 1"/>
            <div className="main__card-wrapper--content">
                <p>Woman in Red Coat</p>
                <p>$89.00</p>
            </div>
        </div>
        <div className="main__card-wrapper">
            <img className="main__card-wrapper--image"  src={image2} alt="image 2"/>
            <div className="main__card-wrapper--content">
                <p>Woman in Red Coat</p>
                <p>$89.00</p>
        </div>
        <div className="main__card-wrapper">
            <img className="main__card-wrapper--image"  src={image2} alt="image 2"/>
            <div className="main__card-wrapper--content">
                <p>Woman in Red Coat</p>
                <p>$89.00</p>
        </div>
        <div className="main__card-wrapper">
            <img className="main__card-wrapper--image"  src={image2} alt="image 3"/>
            <div className="main__card-wrapper--content">
                <p>Woman in Red Coat</p>
                <p>$89.00</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
    
}

export default Main;
import "./AboutUs.scss";
import image from "../../assets/images/About Us.jpeg";
function AboutUs() {
    return (
       <div className="aboutus__container">
        <div className="aboutus__content">
            <h2>WELCOME TO CEIN</h2>
        <img src={image} alt="aboutUs image"/>
         <p>Our website is focused on sustainable fashion and lifestyle choices. At CEIN, we are committed to promoting a greener, more ethical approach to fashion by showcasing a curated collection of brands that prioritize eco-friendly and sustainable practices.
            With a passion for both style and sustainability, we have handpicked a diverse range of 10brands that share our vision for a more conscious and environmentally-friendly future.
            Join us on our journey towards a more sustainable future. Explore our collection, discover new brands, and be part of the movement towards a greener, more ethical fashion industry. Thank you for choosing CEIN as your trusted source for eco-friendly and sustainable fashion!
            </p>
            

        </div>

       </div> 
    )
}

export default AboutUs;
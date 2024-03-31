import "./ContactUs.scss";
import Input from "../../components/Input/Input";

function ContactUs() {
    return(
    <div className="contactus__container">
        <img/>
    <h2 className="contactus__text">CONTACT US</h2>
    <p className="contactus__content">We would love to hear from you.</p>
    <p className="contactus__content">If you have any query or any type of suggestion, you can contact us here.We would love to hear from you.</p>
    <form className="form">
    <Input type="text" name="name" label="Name" htmlFor="name" />
        <Input type="text" name="email" label="Email" htmlFor="email" />
        <textarea className="form__textarea"type="text" label="Message" htmlFor="message"></textarea>
        <button type= "submit" className="form__button">Send Message</button>
    </form>
    <div className="contactus__content">
        <h2>Get In Touch</h2>
        <p>You can get in touch with us on this provided email. </p>
        <p>Email:tosine727@gmail.com</p>
    </div>
    </div>
    )
}
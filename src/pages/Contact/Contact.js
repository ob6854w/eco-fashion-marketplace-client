import "./Contact.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Contact() {
  return (
    <>
      <div className="contact">
        <h2 className="contact__text">CONTACT US</h2>
      </div>
      <div className="contact__wrapper">
        <div className="contact__wrapper1">
          <h3>We would love to hear from you</h3>
          <p>
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <form className="form">
            <div className="form__wrapper">
              <Input className="form__input" name="Name" type="text" label="Name"/>
              <Input className="form__input" name="Email" type="email" label="Email"/>
            </div>
            <div className="field">
              <label htmlFor="message" className="field__label">
                Message
              </label>
              <textarea></textarea>
            </div>
            <Button className="form__btn">SEND MESSAGE</Button>
          </form>
        </div>
        <div className="contact__wrapper2">
          <div className="contact__wrapper2-cont">
            <h3>Visit Us</h3>
            <p>UET Lahore, Punjab, Pakistan Phone: +923039898987</p>
          </div>
          <div className="contact__wrapper2-cont">
            <h3>Get in Touch</h3>
            <p>You can get in touch with us on this provided email</p>
            <p>Email: abc@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

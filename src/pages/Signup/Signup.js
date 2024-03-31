import "./Signup.scss";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REACT_APP_BASE_URL } from "../../consts";

function Signup() {
    const [error, setError] =useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post(`${REACT_APP_BASE_URL}/users/signup`, {
              username: event.target.first_lastname.value,
              name: event.target.name.value,
              email: event.target.email.value,
              password: event.target.password.value,
            });

            setSuccess(true);
            setError(null);
            event.target.reset();
          } catch (error) {
            setSuccess(false);
            setError(error.response.data);
          }
        };

    return(
        <main className="signup">
            <form className="signup__form" onSubmit={handleSubmit}>
                <h1 className="signup__title">Sign Up</h1>
                <Input type="text" username="first_lastname" label="First_Lastname" />
                <Input type="text" name="name" label="Name"/>
                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />
                <button className="signup__button">Sign up</button>  

                {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>}
            </form>
            <p>
            Have an account? <Link to="/login">Log in</Link>
            </p>
        </main>
    );
}


export default Signup;

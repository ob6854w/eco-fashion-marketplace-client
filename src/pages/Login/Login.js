import "./Login.scss";
import { REACT_APP_BASE_URL } from "../../const";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${REACT_APP_BASE_URL}/users/login`, {
        username: event.target.username.value,
        password: event.target.password.value
      });

      if (response && response.data) {
        // Store authentication token in session storage
        sessionStorage.setItem("token", response.data.token);
        // Redirect to home page or dashboard
        navigate("/");
      } else {
        // Handle invalid response
        setError("Invalid response received from server");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again later.");
    }
  };

    return (
        <main className="login">
            <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Login</h1>

        <Input type="text" name="username" label="Username" />
        <Input type="password" name="password" label="Password" />

        <button className="login__button">Login</button>

        {error && <div className="login__message">{error}</div>}
      </form>

      <p className="login__link">
        Need an account? <Link to="/signup">Signup</Link>
      </p>
    </main>
  );
}

export default Login;


import { useState } from "react";
import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
  const {  handleLogin } = useAuth();

  const navigate = useNavigate();
  const [identifier, setIdentifer] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin({identifier,password});

    navigate('/');

  };

  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={identifier}
            onChange={(e) => setIdentifer(e.target.value)}
            type="text"
            label="Email/Username"
            placeholder="Enter your email or username"
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <p>
          Dont have an account ? <Link to="/register">Register here</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;

import React, { useState } from "react";
import "./styles.css";
import { useNavigate, Link } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <p>Welcome back! 👋</p>
        <h2>Sign up to your account</h2>
        <div className="form">
          <label htmlFor="username">Your Name</label>
          <br />
          <input
            type="text"
            id="username"
            placeholder="Your Name"
            required
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Your Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
          <br />
          <button type="submit" id="signup-form" onClick={handleClick}>
            Continue
          </button>
        </div>

        <p id="error-message" className="error"></p>
      </div>

      <div className="text-center">
        Already have an account ? <Link to={"/"}>Sign in</Link>
      </div>
    </>
  );
}

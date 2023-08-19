import React, { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            if (data.message !== "Invalid credentials") {
              console.log(data);
              sessionStorage.setItem("token", data.token);
              sessionStorage.setItem("id", data.id);
              navigate("/profile");
            } else {
              alert(data.message);
            }
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="container">
          <form>
            <p>Welcome back! 👋</p>
            <h2>Sign in to your account</h2>

            <label>Your Email</label>
            <input type="text" value={username} placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin} type="submit" className="btn btn-primary">
              Continue
            </button>
          </form>
        </div>

        <div className="text-center">
          Don't have an account ? <Link to={"/sign-up"}>Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;

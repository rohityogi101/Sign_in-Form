import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    if (token === "" || token === null) {
      navigate("/");
    }

    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // console.log(user)
      });
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "100px" }}>Profile Page</h1>

      <h3>
        Welcome, {user.firstName} {user.lastName}!
      </h3>
      <button type="" className="">
        <Link to={"/"}>Logout</Link>
      </button>
    </>
  );
};

export default ProfilePage;

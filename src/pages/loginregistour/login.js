import React from "react";
import "./login.css";
import Register from "./register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState();
  const [valid, setValid] = useState(true);
  const handlesubmit = (event) => {
    event.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid";
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password length at least 6 character";
    }
    setErrors(validationErrors);
    setValid(isvalid);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/");
    }
  };
  return (
    <div className="forms">
      <div className="login-form">
        <form
          action=""
          method=""
          className="display-form"
          onSubmit={handlesubmit}
        >
          <div className="input-box">
            <input
              type="email"
              placeholder="Username or Email"
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            {valid ? <></> : <span className="texterror">{errors.email}</span>}
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            {valid ? (
              <></>
            ) : (
              <span className="texterror">{errors.password}</span>
            )}
          </div>

          <input type="submit" value="Login" className="login-btn" />
        </form>
      </div>

      <Register />
    </div>
  );
};

export default Login;

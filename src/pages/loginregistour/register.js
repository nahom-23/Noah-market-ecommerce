import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState();
  const [valid, setValid] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (loginData.username === "" || loginData.username === null) {
      isvalid = false;
      validationErrors.username = "username required";
    }
    if (loginData.email === "" || loginData.email === null) {
      isvalid = false;
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid";
    }
    if (loginData.password === "" || loginData.password === null) {
      isvalid = false;
      validationErrors.password = "password is required";
    } else if (loginData.password.length < 6) {
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
    <div className="login-form">
      <form className="display-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            onChange={(event) =>
              setLoginData({ ...loginData, username: event.target.value })
            }
          />
          {valid ? <></> : <span className="texterror">{errors.username}</span>}
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder=" Email address"
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
          />
          {valid ? <></> : <span className="texterror">{errors.email}</span>}
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
          />
          {valid ? <></> : <span className="texterror">{errors.password}</span>}
        </div>

        <input type="submit" value="Register" className="login-btn" />
      </form>
    </div>
  );
};

export default Register;

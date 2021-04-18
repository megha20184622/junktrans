import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Loginpage.css";
import Logo from "../../components/imgaes/finance.png";
import title from "../../components/imgaes/title.png";
import Label from "../../components/Label.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearErrorMessage, validateUserCredentials, } from "../../action/loginPage";
import { BsPersonFill } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { validateUserCred, authenticateLogin, } from "../../services/loginPageService";
import Auth from "../../routes/auth";
import api from "../../config/api";

let message;
const App = () => {
  let history = useHistory();
  const [userName, setUserName] = useState(
    localStorage.getItem("loggedInUser") || ""
  );

  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  let errorStatus = useSelector((state) => state.loginPage.error);
  let errorMessage = useSelector((state) => state.loginPage.errorMessage);
  let passwordUpdateStatus = useSelector(
    (state) => state.loginPage.passwordUpdateStatus
  );
  const usernameUpdateStatus = useSelector(
    (state) => state.loginPage.usernameUpdateStatus
  );

  let user = useSelector((state) => state.loginPage.userName);


  const validate = async () => {
    const response = await validateUserCred({ userName, password, type });
    // if (data.authenticated) {
    // //console.log("Authenticated", data.token, data.username);
    // localStorage.setItem("token", data.token);
    // localStorage.setItem("userName", userName);
    // localStorage.setItem("authenticated", data.authenticated);
    // Auth.authenticate();
    // //console.log(localStorage);
    // history.push("/home");
    // } 
    if (response.status === 200) {
      console.log("hi");
      history.push("/home");
    }
    else if (response.error) {
      console.log(response.error);
      message = "User does not exist!";
      setError(true);
    }
  };

  const handleUsernameChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setPassword(e.target.value);
  };

  const handleTypeChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "" || type === "") {
      setError(true);
      message = "All fields are required!";
    } else {
      validate();
    }
  };

  const handleRememberMe = (e) => {

    localStorage.setItem("loggedInUser", e.target.value);
  };

  const handleForgotPassword = (e) => {
    dispatch(clearErrorMessage());
    history.push("/forgotPassword");
  };
  const handleUpdateUsername = (e) => {
    dispatch(clearErrorMessage());
    history.push("/updateusername");
  };
  return (
    <div>
      <div className="lp-heading-style">
        <h1 className="lp-title-style">
          Junk Transformers<br />
          <span className="lp-subtitle-style">For a Greener Tomorrow</span>
        </h1>
        {/* <img className="lp-title-style" alt="wallet" src={title}></img> */}
      </div>
      <div className="lp-text-center">
        <img className="lp-login-wallet-img" alt="wallet" src={Logo}></img>
        <div className="lp-form-signin">
          <h1 className="lp-header-style">Sign in here!</h1>
          {error ? <p className="lp-error-message">{`${message}`}</p> : null}
          <br />
          <div className="lp-button1">
            <input
              value={type}
              name="type"
              type="radio"
              value="admin"
              onChange={handleTypeChange}
            />
            <span>Admin</span>
          </div>
          <div className="lp-button2">
            <input
              value={type}
              name="type"
              type="radio"
              value="user"
              onChange={handleTypeChange}
            />
            <span>User</span>
          </div>
          <br />
          <input
            id="userName"
            type="text"
            value={userName}
            className="lp-login-form-control-username"
            onChange={handleUsernameChange}
            placeholder="Enter Username"
          />
          <p>
            <BsPersonFill className="user-icon" />
          </p>
          <input
            id="password"
            type="password"
            value={password}
            className="lp-login-form-control-password"
            onChange={handlePasswordChange}
            placeholder="Enter Password"
          />
          <p>
            <BsLockFill className="lock-icon" />
          </p>
          <input
            value={userName}
            type="checkbox"
            className="lp-checkbox"
            onChange={handleRememberMe}
          />
          <span className="cb-msg">Remember Me</span>
          <br />
          <br />
          <button className="lp-login-button-signin" >
            <span>Sign Up</span>
          </button>
          <button className="lp-login-button-signin" onClick={handleSubmit}>
            <span>Sign In</span>
          </button>

          {/* <div>
            <a className="lp-link-style-fp" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          </div>
          <div>
            <a className="lp-link-style-fu" onClick={handleUpdateUsername}>
              Update Username?
            </a>
          </div> */}
          {/* <button
            className="lp-login-button-pass"
            onClick={handleForgotPassword}>
            <span>Forgot Password</span>
          </button>
          <button
            className="lp-login-button-user"
            onClick={handleForgotUsername}>
            <span>Forgot Username</span>
          </button> */}
          <br />
          {/* {passwordUpdateStatus ? (
            <span className="lp-success-message">Password Updated!</span>
          ) : (
            ""
          )} */}
          {usernameUpdateStatus ? (
            <span className="lp-success-message">Username Updated!</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
// App.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

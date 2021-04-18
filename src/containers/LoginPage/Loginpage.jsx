import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Loginpage.css";
import Logo from "../../components/imgaes/finance.png";
import Label from "../../components/Label.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearErrorMessage,
  validateUserCredentials,
} from "../../action/loginPage";
import api from "../../config/api";

let message;
const App = () => {
  let err = "";
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  let errorStatus = useSelector((state) => state.loginPage.error);
  let errorMessage = useSelector((state) => state.loginPage.errorMessage);
  let passwordUpdateStatus = useSelector(
    (state) => state.loginPage.passwordUpdateStatus
  );

  useEffect(() => {
    if (!errorStatus) {
      history.push("/app");
    }
  }, [errorStatus]);

  useEffect(() => {
    if (errorMessage) {
      setError(true);
      message = errorMessage;
    }
  }, [errorMessage]);

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
      // var url = new URL("https://jsonplaceholder.typicode.com/posts/1"),
      //     params = {
      //         username: userName,
      //         type,
      //         password
      //     }
      // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      // //  dispatch(validateUserCredentials({ type, userName, password }));
      fetch(api.login,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: userName,
            type,
            password
          })

        }
      )
        .then(response => response.json())
        .then(data => {
          if (data && data.authenticated) {
            history.push("/home");
          }
        });
    }
  };

  const handleForgotPassword = (e) => {
    dispatch(clearErrorMessage());
    history.push("/forgotPassword");
  };

  return (
    <div className="lp-text-center">
      <img className="lp-login-wallet-img" alt="wallet" src={Logo}></img>
      <div className="lp-form-signin">
        <h1>Sign in here!</h1>
        {error ? <p className="lp-error-message">{`${message}`}</p> : null}
        <br />
        <div className="lp-button1">
          <input
            value={type}
            name="type"
            type="radio"
            value="retail"
            onChange={handleTypeChange}
          />
          <span>Retail</span>
        </div>
        <input
          value={type}
          name="type"
          type="radio"
          value="commercial"
          onChange={handleTypeChange}
        />
        <span>Commercial</span>
        <input
          id="userName"
          type="text"
          value={userName}
          className="lp-login-form-control"
          onChange={handleUsernameChange}
          placeholder="Enter Username"
        />
        <input
          id="password"
          type="password"
          value={password}
          className="lp-login-form-control"
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
        <br />
        <button onClick={handleSubmit}>
          <span>Sign In</span>
        </button>
        <button onClick={handleForgotPassword}>
          <span>Forgot Password</span>
        </button>
        <br />
        {passwordUpdateStatus ? (
          <span className="lp-success-message">Password Updated!</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;

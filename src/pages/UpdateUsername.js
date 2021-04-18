import React, { useState } from "react";
import "./ChangePages.css";
import { BsPersonFill } from "react-icons/bs";
import Logo from "../components/imgaes/ps.png";
import { useHistory } from "react-router-dom";
import updateUsernameCredentials from "../services/loginPageService";

let message;

const UpdateUsername = () => {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [error, setError] = useState(false);

  const updateUsername = async () => {
    const response = await updateUsernameCredentials({ userName, newUserName });
    //const data = response.payload;
    if (response.status === 200) {
      alert("Username Updated!");
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  };

  const handleUpdateUsername = () => {
    if (userName.length === 0 || newUserName.length === 0) {
      setError(true);
      message = "All fields are required!";
    } else if (newUserName.length <= 2) {
      setError(true);
      message = "Username should be greater than 2 characters!";
    } else if (newUserName.length > 10) {
      setError(true);
      message = "Username should not exceed 10 characters!";
    } else {
      updateUsername();
    }
  };

  return (
    <div>
      <div className="cp-heading-style">
        <h1 className="cp-title-style">
          OPTIMA
          <span className="cp-subtitle-style">Pay Less, Save More</span>
        </h1>
      </div>
      <div className="cp-text-center">
        <img src={Logo} className="cp-login-wallet-img"></img>
        <div className="cp-form-signin">
          <h1 className="cp-header-style">Update Username</h1>
          {error ? <p className="cp-error-message">{`${message}`}</p> : ""}
          <input
            type="text"
            placeholder="Enter Username"
            className="cp-login-form-control"
            value={userName}
            onChange={(e) => {
              setError(false);
              setUserName(e.target.value);
            }}
            autoFocus
          />
          <p>
            <BsPersonFill className="cp-user-icon-one" />
          </p>
          <input
            type="text"
            value={newUserName}
            placeholder="Enter New Username"
            className="cp-login-form-control-password"
            onChange={(e) => {
              setError(false);
              setNewUserName(e.target.value);
            }}
          />
          <p>
            <BsPersonFill className="cp-user-icon-two" />
          </p>
          <button
            type="submit"
            onClick={handleUpdateUsername}
            className="cp-login-button-signin"
          >
            <span>Update Username</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUsername;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordCredentials } from "../action/loginPage";
import { useHistory } from "react-router-dom";
import "../containers/LoginPage/Loginpage.css";
import Logo from "../components/imgaes/ps.png";

let message;

const ChangePassword = (props) => {
  let history = useHistory();
  const location = useLocation();
  const userName = location.state.userName;
  const type = location.state.type;
  const dispatch = useDispatch();
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);
  const passwordUpdateStatus = useSelector(
    (state) => state.loginPage.passwordUpdateStatus
  );

  useEffect(() => {
    if (passwordUpdateStatus) {
      alert("Password Updated!");
      setTimeout(() => {
        history.push({
          pathname: "/",
          state: { status: true },
        });
      }, 1000);
    }
  }, [passwordUpdateStatus]);

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPass === "" && confirmPass === "") {
      setError(true);
      message = "The fields cannot be empty!";
    } else if (newPass.length < 4 || newPass.length > 12) {
      setError(true);
      message = "The password should be 4-12 characters in length!";
    } else if (newPass !== confirmPass) {
      message = "The passwords do not match!";
      setError(true);
    } else {
      dispatch(updatePasswordCredentials({ userName, type, newPass }));
    }
  };
  return (
    <div className="lp-text-center">
      <img src={Logo} className="lp-login-wallet-img" ></img>
      <div className="lp-form-signin">
        <h1>Reset Password</h1>
        {error ? <p className="lp-error-message">{`${message}`}</p> : ""}

        <input
          type="password"
          placeholder="Enter New password"
          className="lp-login-form-control"
          value={newPass}
          onChange={(e) => {
            setError(false);
            setNewPass(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={confirmPass}
          placeholder="Confirm Password"
          className="lp-login-form-control"
          onChange={(e) => {
            setError(false);
            setConfirmPass(e.target.value);
          }}
        />
        <button type="submit" onClick={handleChangePassword} className="lp-login-button">
          <span>Reset Password</span>
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;

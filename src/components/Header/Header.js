import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  let userName = localStorage.getItem("userName");
  let history = useHistory();
  const handleSignOut = () => {
    console.log("Handle Sign Out!");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("authenticated");
    history.push("/");
    //window.location.reload();
  };

  return (
    <div className="Header">
      <div className="header-left">
        <span id="main-head">Junk Transformers</span><br />
        <span id="sub">For a Greener Tomorrow</span>
        <span id="bell">
          <img
            className="layoutimg"
            src="./layoutassets/bell.png"
            alt=""
            height="30px"
          />
        </span>
      </div>
      <div className="header-right">
        <img
          className="layoutimg"
          src="./layoutassets/contact.jpeg"
          alt=""
          height="30px"
        />

        <span className="username-call">Hello Alice!</span>

        <a
          style={{
            cursor: "pointer",
          }}
        >
          <img
            className="layoutimg"
            src="./layoutassets/logout.png"
            alt="Logout"
            height="29px"
            onClick={() => handleSignOut()}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;

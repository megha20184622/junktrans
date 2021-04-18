import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  //const isAuthenticated = localStorage.getItem("authenticated");
  //console.log(Auth.getAuth());
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.getAuth() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;

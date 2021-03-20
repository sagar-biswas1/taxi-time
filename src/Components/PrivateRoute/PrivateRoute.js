import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(UserContext);
  console.log("eqra", user.name, "email", user.email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.name || user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
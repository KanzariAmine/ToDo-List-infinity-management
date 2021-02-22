import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/authContext";
function PrivateRoute({ component: Component, ...rest }) {
  const { state, _ } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

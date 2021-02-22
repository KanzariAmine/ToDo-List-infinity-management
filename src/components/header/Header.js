import { useContext } from "react";
import { Navigation } from "./Header.styled";
import { NavLink } from "react-router-dom";
//Context
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const onGoBack = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "IS_AUTHENTICATED",
      payload: {
        email: "",
        password: "",
      },
    });
  };
  return (
    <Navigation>
      <nav>
        <ul>
          <li>
            <a>Todo List </a>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/taches" style={{ opacity: state ? 1 : 0 }}>
              Taches
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={onGoBack} style={{ opacity: state ? 1 : 0 }}>
              Déconnexion
            </a>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
};

export default Header;

import { Navigation } from "./Header.styled";

const Header = () => {
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
            <a>Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Taches</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Connectxion</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Déconnexion</a>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
};

export default Header;

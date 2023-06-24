import { Link } from "react-router-dom";
import "../NavTab/NavTab.css";
import burgerIcon from "../../../images/burger.svg";

function NavTab({ loggedIn, handleBurgerClick }) {
  return (
    <nav className="nav-tab">
      {loggedIn ? (
        <ul className="nav-tab__nav-list">
          <li>
            <Link to="/profile" className="nav-tab__link">
              <button className="nav-tab__btn">Аккаунт</button>
            </Link>
            <button className="nav-tab__burger" onClick={handleBurgerClick}>
              <img
                src={burgerIcon}
                alt="Меню"
                className="nav-tab__burger-icon"
              ></img>
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav-tab__nav-list">
          <li>
            <Link to="/signup" className="nav-tab__link">
              <button className="nav-tab__btn-register">Регистрация</button>
            </Link>
          </li>
          <li>
            <Link to="/signin" className="nav-tab__link">
              <button className="nav-tab__btn-login">Войти</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavTab;

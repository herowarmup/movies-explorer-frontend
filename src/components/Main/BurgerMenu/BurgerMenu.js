import { Link, useLocation } from "react-router-dom";
import closeIcon from "../../../images/close.svg";
import "./BurgerMenu.css";

function BurgerMenu({ isOpen, handleCloseClick }) {
  const location = useLocation();

  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <img
        src={closeIcon}
        alt="Закрыть"
        className="menu__close-btn"
        onClick={handleCloseClick}
      />
      <ul className="menu__list">
        <li className="menu__item">
          <Link
            to="/"
            className={`menu__link ${
              location.pathname === "/" ? "menu__link--active" : ""
            }`}
          >
            Главная
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/movies"
            className={`menu__link ${
              location.pathname === "/movies" ? "menu__link--active" : ""
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/saved-movies"
            className={`menu__link ${
              location.pathname === "/saved-movies" ? "menu__link--active" : ""
            }`}
          >
            Сохраненные фильмы
          </Link>
        </li>
        <li className="menu__item menu__item--account">
          <Link
            to="/profile"
            className={`menu__link-account ${
              location.pathname === "/profile"
                ? "menu__link-account--active"
                : ""
            }`}
          >
            Аккаунт
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;

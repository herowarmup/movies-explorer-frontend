import { Link, useLocation } from "react-router-dom";
import "./FilmsTab.css";

function FilmsTab({ authorization }) {
  const location = useLocation();

  return (
    <nav className="films-tab">
      {authorization === "not-auth" && " "}
      {authorization === "auth" && (
        <ul className="films-tab__nav-list">
          <li>
            <Link to="/movies" className="films-tab__link">
              <button
                className={`films-tab__btn-films ${
                  location.pathname === "/movies"
                    ? "films-tab__btn-films--active"
                    : ""
                }`}
              >
                Фильмы
              </button>
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className="films-tab__link">
              <button
                className={`films-tab__btn-savedfilms ${
                  location.pathname === "/saved-movies"
                    ? "films-tab__btn-savedfilms--active"
                    : ""
                }`}
              >
                Сохраненные фильмы
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default FilmsTab;

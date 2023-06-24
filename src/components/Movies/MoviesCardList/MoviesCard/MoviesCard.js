import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

import saveIcon from "../../../../images/save.svg";
import deleteIcon from "../../../../images/delete.svg";

function MoviesCard({ movie }) {
  const location = useLocation();
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;

  function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  }

  return (
    <div className="card">
      <h3 className="card__info-title">{movie.nameRU}</h3>
      <p className="card__info-duration">
        {convertToHoursAndMinutes(movie.duration)}
      </p>
      <img
        className="card__like-btn__icon"
        src={`${location.pathname === "/movies" ? saveIcon : deleteIcon}`}
        alt={movie.nameRU}
      />

      <img className="card__image" src={imageUrl} alt={movie.nameRU} />
    </div>
  );
}

export default MoviesCard;

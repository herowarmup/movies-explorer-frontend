import { Link, useLocation } from "react-router-dom";

import saveIcon from "../../../../images/save.svg";
import savedIcon from "../../../../images/saved.svg";
import deleteIcon from "../../../../images/delete.svg";

import "./MoviesCard.css";

function MoviesCard({ card, handleSaveMovie, handleDeleteMovie, isSaved }) {
  const location = useLocation();
  const imageUrl =
    location.pathname === "/movies"
      ? `https://api.nomoreparties.co/${card.image.url}`
      : `${card.image}`;

  function handleSaveMovieCard() {
    handleSaveMovie(card);
  }

  function handleDeleteMovieCard() {
    handleDeleteMovie(card);
  }

  function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  }

  return (
    <div className="card">
      <h3 className="card__info-title">{card.nameRU}</h3>
      <p className="card__info-duration">
        {convertToHoursAndMinutes(card.duration)}
      </p>

      {location.pathname === "/movies" && (
        <img
          className="card__like-btn__icon"
          src={isSaved(card) ? savedIcon : saveIcon}
          alt={card.nameRU}
          onClick={isSaved(card) ? handleDeleteMovieCard : handleSaveMovieCard}
        />
      )}
      {location.pathname === "/saved-movies" && (
        <img
          className="card__like-btn__icon"
          src={deleteIcon}
          alt={card.nameRU}
          onClick={handleDeleteMovieCard}
        />
      )}

      <Link
        to={card.trailerLink}
        target="_blank"
        className="card__trailer-link"
      >
        <img className="card__image" src={imageUrl} alt={card.nameRU} />
      </Link>
    </div>
  );
}

export default MoviesCard;

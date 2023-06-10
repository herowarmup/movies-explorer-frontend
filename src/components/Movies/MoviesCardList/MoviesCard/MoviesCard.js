import "./MoviesCard.css";

import saveIcon from "../../../../images/save.svg";

function MoviesCard({ movie }) {
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
      <img className="card__like-btn__icon" src={saveIcon} alt={movie.nameRU} />

      <img className="card__image" src={imageUrl} alt={movie.nameRU} />
    </div>
  );
}

export default MoviesCard;

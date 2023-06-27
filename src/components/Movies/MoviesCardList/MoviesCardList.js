import { useLocation } from "react-router-dom";

import MovieCard from "./MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";

import "./MoviesCardList.css";

function MoviesCardList({
  cards,
  isSaved,
  alreadySavedMovies,
  handleShowMore,
  isLoading,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();

  const foundMovies = JSON.parse(localStorage.getItem("foundedMovies"));

  if (isLoading) return <Preloader />;
  if (!foundMovies)
    return <div className="movies__not-found">Введите поисковой запрос</div>;
  if (cards.length === 0 && foundMovies.length === 0)
    return <div className="movies__not-found">Ничего не найдено</div>;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__cards">
        {cards.map((card) => {
          const key =
            location.pathname === "/saved-movies" ? card._id : card.id;

          return (
            <MovieCard
              key={key}
              card={card}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isSaved={isSaved}
            />
          );
        })}
      </ul>

      {alreadySavedMovies ? (
        ""
      ) : cards.length < foundMovies.length ? (
        <div className="movies-card-list__btn">
          <button
            className="movies-card-list__more-btn"
            onClick={handleShowMore}
          >
            Ещё
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;

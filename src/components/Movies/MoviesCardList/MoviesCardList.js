import "./MoviesCardList.css";
import MovieCard from "./MoviesCard/MoviesCard";

function MoviesCardList({ moviesList }) {
  const movieListElement = moviesList.map((movie) => {
    return (
      <li key={movie.id} className="movies-card-list__card">
        <MovieCard movie={movie} />
      </li>
    );
  });

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__cards">{movieListElement}</ul>
      <div className="movies-card-list__btn">
        <button className="movies-card-list__more-btn">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;

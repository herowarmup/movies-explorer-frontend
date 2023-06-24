import { useEffect, useState } from "react";

import Header from "../../shared/Header/Header";
import ScrollUp from "../../shared/ScrollUp/ScrollUp";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../../shared/Footer/Footer";

import "./SavedMovies.css";

function SavedMovies({
  loggedIn,
  cards,
  handleDeleteMovie,
  isLoading,
  isSaved,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  function initFilteredMovies() {
    setFilteredMovies(cards);
  }

  useEffect(() => {
    setFilteredMovies((prevFilteredMovies) =>
      prevFilteredMovies.filter((movie) =>
        cards.some((card) => movie.movieId === card.movieId)
      )
    );
  }, [cards]);

  function handleSearchMovie(movieName, isShortFilms) {
    const filteredMovies = cards.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(filteredMovies);
    }
  }

  useEffect(() => {
    initFilteredMovies();
  }, []);

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm defaultValue="" handleSearchMovie={handleSearchMovie} />
      <MoviesCardList
        cards={filteredMovies}
        isSaved={isSaved}
        alreadySavedMovies={true}
        handleDeleteMovie={handleDeleteMovie}
        isLoading={isLoading}
      />
      <Footer />
      <ScrollUp />
    </section>
  );
}

export default SavedMovies;

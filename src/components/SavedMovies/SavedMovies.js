import "./SavedMovies.css";

import Header from "../../shared/Header/Header";
import ScrollUp from "../../shared/ScrollUp/ScrollUp";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../../shared/Footer/Footer";

function SavedMovies({ moviesList }) {
  return (
    <section className="movies">
      <Header authorization="auth" />
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
      <Footer />
      <ScrollUp />
    </section>
  );
}

export default SavedMovies;

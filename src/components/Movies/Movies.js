import "./Movies.css";

import Header from "../../shared/Header/Header";
import ScrollUp from "../../shared/ScrollUp/ScrollUp";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../../shared/Footer/Footer";

function Movies({ moviesList }) {
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

export default Movies;

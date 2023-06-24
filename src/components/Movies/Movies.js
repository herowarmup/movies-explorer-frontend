import Header from "../../shared/Header/Header";
import ScrollUp from "../../shared/ScrollUp/ScrollUp";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../../shared/Footer/Footer";

import "./Movies.css";

function Movies({
  loggedIn,
  cards,
  defaultSearchValue,
  handleShowMore,
  handleSearchMovie,
  isLoading,
  isSaved,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        defaultValue={defaultSearchValue}
        handleSearchMovie={handleSearchMovie}
      />
      <MoviesCardList
        cards={cards}
        handleShowMore={handleShowMore}
        isLoading={isLoading}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        isSaved={isSaved}
      />
      <Footer />
      <ScrollUp />
    </section>
  );
}

export default Movies;

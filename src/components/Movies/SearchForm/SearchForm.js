import { useState, useEffect } from "react";

import find from "../../../images/find.svg";

import "./SearchForm.css";

function SearchForm({ defaultValue, handleSearchMovie }) {
  const [movieName, setMovieName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
    handleSearchMovie(movieName, !isChecked);
  }

  function handleChangeNameMovie(e) {
    setMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchMovie(movieName, isChecked);
  }

  useEffect(() => {
    setMovieName(defaultValue);
    setIsChecked(JSON.parse(localStorage.getItem("shortsMovies")) || false);
  }, [defaultValue]);

  return (
    <section className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={movieName}
          onChange={handleChangeNameMovie}
        />
        <button className="search-form__btn" onClick={handleSubmit}>
          <img src={find} alt="Найти фильм" className="search-form__find" />
        </button>
      </form>

      <div className="toggle-container">
        <div
          className={`toggle ${
            isChecked ? "toggle_checked" : "toggle_unchecked"
          }`}
          onClick={handleChangeCheckbox}
        >
          <div className="toggle__inner"></div>
        </div>
        <p className="toggle-text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;

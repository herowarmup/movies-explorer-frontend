import React, { useState } from "react";

import "./SearchForm.css";
import find from "../../../images/find.svg";

function SearchForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="search-form-container">
      <form className="search-form">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__btn">
          <img src={find} alt="Найти фильм" className="search-form__find" />
        </button>
      </form>

      <div className="toggle-container">
        <div
          className={`toggle ${isChecked ? "toggle_checked" : ""}`}
          onClick={handleToggle}
        >
          <div className="toggle__inner"></div>
        </div>
        <p className="toggle-text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;

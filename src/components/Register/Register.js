import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import logo from "../../images/logo.svg";

import "./Register.css";

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRegister(values);
    resetForm();
  }

  return (
    <div className="register-form__container">
      <Link to="/" className="register-form__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h1 className="register-form__title">Добро пожаловать!</h1>
      <form className="register-form" onSubmit={handleFormSubmit} noValidate>
        <label className="register-form__field">
          <span className="register-form__field-label">Имя</span>
          <input
            name="name"
            className="register-form__input"
            id="name"
            type="name"
            autoComplete="off"
            placeholder="Введите ваше имя"
            minLength={2}
            maxLength={30}
            value={values.name || ""}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <span className="register-form__input-error">{errors.name}</span>
          )}
        </label>
        <label className="register-form__field">
          <span className="register-form__field-label">E-mail</span>
          <input
            name="email"
            className="register-form__input"
            id="email"
            type="email"
            autoComplete="off"
            placeholder="Введите ваш email"
            minLength={2}
            maxLength={30}
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="register-form__input-error">{errors.email}</span>
          )}
        </label>
        <label className="register-form__field">
          <span className="register-form__field-label">Пароль</span>
          <input
            name="password"
            className="register-form__input"
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Введите ваш пароль"
            value={values.password || ""}
            onChange={handleChange}
            required
            minLength={8}
          />
          {errors.password && (
            <span className="register-form__input-error">
              {errors.password}
            </span>
          )}
        </label>
        <button
          type="submit"
          className="register-form__btn-signup"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register-form__text">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register-form__link">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;

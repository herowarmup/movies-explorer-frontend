import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

import logo from "../../images/logo.svg";

import "./Login.css";

function Login({ handleLogin, loggedIn }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleFormSubmit(e) {
    e.preventDefault();
    handleLogin(values);
    resetForm();
  }

  return (
    <div className="login-form__container">
      <Link to="/" className="login-form__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h1 className="login-form__title">Рады видеть!</h1>
      <form className="login-form" onSubmit={handleFormSubmit} noValidate>
        <label className="login-form__field">
          <span className="login-form__field-label">E-mail</span>
          <input
            name="email"
            className="login-form__input"
            type="text"
            placeholder="Введите ваш e-mail"
            minLength={2}
            maxLength={30}
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          {errors.email ? (
            <span className="login-form__input-error">{errors.email}</span>
          ) : (
            <span className="login-form__input-error"> </span>
          )}
        </label>
        <label className="login-form__field">
          <span className="login-form__field-label">Пароль</span>
          <input
            name="password"
            className="login-form__input"
            type="password"
            placeholder="Введите ваш пароль"
            minLength={8}
            autoComplete="off"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          {errors.password ? (
            <span className="login-form__input-error">{errors.password}</span>
          ) : (
            <span className="login-form__input-error"> </span>
          )}
        </label>
        <button
          type="submit"
          className="login-form__btn-signin"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <p className="login-form__text">
        Еще не зарегистрированы?{" "}
        <Link to="/signup" className="login-form__link">
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;

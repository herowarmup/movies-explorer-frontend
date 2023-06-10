import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <div className="login-form__container">
      <Link to="/" className="login-form__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h1 className="login-form__title">Рады видеть!</h1>
      <form className="login-form">
        <label className="login-form__field">
          <span className="login-form__field-label">E-mail</span>
          <input
            name="email"
            className="login-form__input"
            type="text"
            required
          />
          <span className="login-form__input-error">Что-то пошло не так..</span>
        </label>
        <label className="login-form__field">
          <span className="login-form__field-label">Пароль</span>
          <input
            name="password"
            className="login-form__input"
            type="password"
          />
          <span className="login-form__input-error">Что-то пошло не так..</span>
        </label>
        <button type="submit" className="login-form__btn-signin">
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

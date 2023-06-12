import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <div className="register-form__container">
      <Link to="/" className="register-form__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h1 className="register-form__title">Добро пожаловать!</h1>
      <form className="register-form">
        <label className="register-form__field">
          <span className="register-form__field-label">Имя</span>
          <input
            name="name"
            className="register-form__input"
            id="name-input"
            type="text"
            placeholder="Введите ваше имя"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register-form__input-error">
            Пожалуйста, введите ваше имя.
          </span>
        </label>
        <label className="register-form__field">
          <span className="register-form__field-label">E-mail</span>
          <input
            name="email"
            className="register-form__input"
            type="text"
            placeholder="Введите ваш email"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register-form__input-error">
            Пожалуйста, введите ваш email.
          </span>
        </label>
        <label className="register-form__field">
          <span className="register-form__field-label">Пароль</span>
          <input
            name="password"
            className="register-form__input"
            type="password"
            autoComplete="off"
            placeholder="Введите ваш пароль"
            required
          />
          <span className="register-form__input-error">
            Пожалуйста, введите ваш пароль.
          </span>
        </label>
        <button type="submit" className="register-form__btn-signup">
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

import { Link } from "react-router-dom";

import Header from "../../shared/Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Header authorization="auth" />
      <section className="profile">
        <h1 className="profile__title">Привет, Артём!</h1>

        <form className="profile__form">
          <label className="profile__field">
            <span className="profile__field-label">Имя</span>
            <input
              name="name"
              className="profile__input"
              type="text"
              value="Артём"
              readOnly={true}
              required
            />
          </label>

          <div className="profile__line"></div>
          <label className="profile__field">
            <span className="profile__field-label">E-mail</span>
            <input
              name="email"
              className="profile__input"
              type="email"
              value="deadtems@yandex.ru"
              readOnly={true}
              required
            />
          </label>
          <Link to="/profile" type="submit" className="profile__btn-edit">
            Редактировать
          </Link>
          <Link to="/" className="profile__logout">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;

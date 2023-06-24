import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import CurrentUserContext from "../../context/CurrentUserContext";

import Header from "../../shared/Header/Header";

import "./Profile.css";

function Profile({ loggedIn, handleUpdateUserInfo, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm({
      name: currentUser.name || "",
      email: currentUser.email || "",
    });
  }, [currentUser, resetForm]);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = async () => {
    if (isValid) {
      setIsLoading(true);
      setUpdateError(null);

      const { name, email } = values;

      try {
        await handleUpdateUserInfo(name, email);

        setIsEditing(false);
        setIsLoading(false);
      } catch (error) {
        setUpdateError(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>

        <form className="profile__form">
          <label className="profile__field">
            <span className="profile__field-label">Имя</span>
            <input
              name="name"
              className="profile__input"
              type="text"
              value={values.name || ""}
              onChange={handleChange}
              readOnly={!isEditing}
              required
            />
          </label>
          {errors.name ? (
            <span className="profile-form__input-error">{errors.name}</span>
          ) : (
            <span className="profile-form__input-error"> </span>
          )}

          <div className="profile__line"></div>
          <label className="profile__field">
            <span className="profile__field-label">E-mail</span>
            <input
              name="email"
              className="profile__input"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
              readOnly={!isEditing}
              required
            />
          </label>
          {errors.email ? (
            <span className="profile-form__input-error">{errors.email}</span>
          ) : (
            <span className="profile-form__input-error"> </span>
          )}

          {isEditing ? (
            <button
              type="button"
              className="profile__btn-edit"
              onClick={handleSaveClick}
              disabled={!isValid || isLoading}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </button>
          ) : (
            <button
              type="button"
              className="profile__btn-edit"
              onClick={handleEditClick}
            >
              Редактировать
            </button>
          )}

          {updateError && <span className="profile__error">{updateError}</span>}
          <Link className="profile__logout" onClick={handleSignOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;

import "./NotFound.css";

function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={goBack} className="not-found__btn">
        Назад
      </button>
    </section>
  );
}

export default NotFound;

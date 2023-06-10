import { Link } from "react-router-dom";
import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <Link
        to="https://herowarmup.github.io/how-to-learn/"
        className="portfolio__link portfolio__link--border"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="стрелка" className="portfolio__arrow" />
      </Link>
      <Link
        to="https://herowarmup.github.io/russian-travel/"
        className="portfolio__link portfolio__link--border"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="стрелка" className="portfolio__arrow" />
      </Link>
      <Link
        to="https://herowarmup.nomoredomains.monster/"
        className="portfolio__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="portfolio__text">Одностраничное приложение</p>
        <img src={arrow} alt="стрелка" className="portfolio__arrow" />
      </Link>
    </section>
  );
}

export default Portfolio;

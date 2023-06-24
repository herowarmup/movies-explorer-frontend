import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <h4 className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__container">
        <p className="footer__copy">&copy; {currentYear} Артём Морозов</p>
        <div className="footer__links">
          <Link
            to="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/herowarmup"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

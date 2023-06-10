import { Link } from "react-scroll";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__nav">
        <Link
          to="about-project"
          className="promo__nav-btn"
          smooth={true}
          duration={500}
        >
          О проекте
        </Link>

        <Link
          to="techs"
          className="promo__nav-btn"
          smooth={true}
          duration={500}
        >
          Технологии
        </Link>

        <Link
          to="about-me"
          className="promo__nav-btn"
          smooth={true}
          duration={500}
        >
          Студент
        </Link>
      </div>
    </section>
  );
}

export default Promo;

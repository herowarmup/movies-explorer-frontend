import { Link } from "react-router-dom";
import BlockTitle from "../BlockTitle/BlockTitle";
import "./AboutMe.css";

import photo from "../../../images/my-photo.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <BlockTitle text="Студент" />
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__title">Артём</h3>
          <p className="about-me__info">Frontend-Dev, UX-UI designer. 25 лет</p>
          <p className="about-me__description">
            Родился и живу в Перми, работаю дизайнером на фрилансе и обучась
            веб-разработке. Люблю активности, особенно сноуборд. Владелец трех
            котов и любимой девушки. Всю жизнь увлекался компьютерами, теперь
            мое увлечение переросло в любимое дело.
          </p>
          <div className="about-me__links">
            <Link
              to="https://github.com/herowarmup"
              className="about-me__link"
              target="_blank"
            >
              Github
            </Link>
            <Link
              to="https://t.me/herowamup"
              className="about-me__link"
              target="_blank"
            >
              Telegram
            </Link>
          </div>
        </div>
        <img src={photo} alt="Моя фотография" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;

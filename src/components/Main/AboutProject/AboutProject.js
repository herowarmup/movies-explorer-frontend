import BlockTitle from "../BlockTitle/BlockTitle";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <BlockTitle text="О проекте" />
      <ul className="about-project__description">
        <li className="about-project__description-block">
          <h3 className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__description-block">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <h4 className="about-project__timeline-title about-project__timeline-title-short">
          1 неделя
        </h4>
        <h4 className="about-project__timeline-title">4 недели</h4>
        <p className="about-project__timeline-text">Back-end</p>
        <p className="about-project__timeline-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;

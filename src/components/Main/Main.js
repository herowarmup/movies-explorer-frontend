import "./Main.css";

import Header from "../../shared/Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfilio/Portfolio";
import Footer from "../../shared/Footer/Footer";
import ScrollUp from "../../shared/ScrollUp/ScrollUp";

function Main() {
  return (
    <section className="main">
      <Header authorization="not-auth" />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
      <ScrollUp />
    </section>
  );
}

export default Main;

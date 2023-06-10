import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./ScrollUp.css";
import arrowUp from "../../images/arrow-up.svg";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  return (
    <Link
      to="header"
      className={`scroll ${isVisible ? "show" : ""}`}
      smooth={true}
      duration={500}
    >
      <img src={arrowUp} alt="в начало страницы" className="scroll__image" />
    </Link>
  );
}

export default ScrollUp;

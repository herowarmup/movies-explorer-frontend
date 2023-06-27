import { useState } from "react";
import { Link } from "react-router-dom";

import NavTab from "../../components/Main/NavTab/NavTab";
import FilmsTab from "../../components/Main/FilmsTab/FilmsTab";
import BurgerMenu from "../../components/Main/BurgerMenu/BurgerMenu";
import headerLogo from "../../images/logo.svg";

import "./Header.css";

function Header({ loggedIn }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(true);
  };

  const handleCloseClick = () => {
    setIsBurgerOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Link>

      <FilmsTab loggedIn={loggedIn} />
      <NavTab loggedIn={loggedIn} handleBurgerClick={handleBurgerClick} />
      <BurgerMenu isOpen={isBurgerOpen} handleCloseClick={handleCloseClick} />
    </header>
  );
}

export default Header;

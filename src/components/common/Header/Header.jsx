import React from "react";

import pathLogo from "../../../icons/logo.svg"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo headre__logo">
        <img src={pathLogo} alt="иконка логотипа" className="logo__icon header__logo__icon"/>
        <p className="logo__title">Marico</p>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation-ul">
          <li className="header__navigation-li">Use Cases</li>
          <li className="header__navigation-li">About</li>
          <li className="header__navigation-li">Pricing</li>
          <li className="header__navigation-li">Blog</li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button className="header__button header__button_type_login ">Login</button>
        <button className="header__button header__button_type_signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitchBtn from "../Btn/themeSwitchBtn";

const NavBar: React.FC = () => {
  return (
  <div className="bg-light grey-element">
    <nav className="navbar navbar-expand-lg bg-light dark-mode">
      <div className="container-fluid">
        <Link
            to="/"
            className="navbar-brand"
            href="src/Components/Navigation/navBar#"
        >
          Главная
        </Link>
        <Link className="nav-link active" aria-current="page" to="/education">
          Обучение
        </Link>
        <ThemeSwitchBtn/>
        <div className="collapse navbar-collapse" id="navbarText"></div>
      </div>
    </nav>
  </div>
  );
};

export default NavBar;

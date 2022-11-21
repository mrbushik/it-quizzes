import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitchBtn from "../Btn/themeSwitchBtn";

const NavBar: React.FC = () => {
  return (
    <div className="bg-light grey-element">
      <nav className="navbar navbar-expand-lg bg-light dark-mode py-3">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <Link
              to="/"
              className="navbar-brand ms-2  p-0 fw-semibold"
              href="src/Components/Navigation/navBar#"
            >
              Главная
            </Link>
            <Link
              className="nav-link  fw-semibold"
              aria-current="page"
              to="/education"
            >
              Обучение
            </Link>
          </div>
          <ThemeSwitchBtn />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React from "react";
import {Link} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link  to='/' className="navbar-brand" href="src/Components/Navigation/navBar#">
          Главная
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="src/Components/Navigation/navBar#">
                Обучение
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="src/Components/Navigation/navBar#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="src/Components/Navigation/navBar#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

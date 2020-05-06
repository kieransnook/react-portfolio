import React from "react";
// import "../Header/style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="title">Kieran Snook</h1>
      </header>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav justify-content-end">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/project">
                Projects <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/kieran-snook-47b679106/"
              >
                Linkedin <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://github.com/kieransnook"
              >
                GitHub <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/1l-wIgfP90tKkK8sQ3B9sU0rWcETaJU1oUSKV2mLdw6k/edit?usp=sharing"
                target="_blank"
              >
                Resume<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../asserts/images/logo.png'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary  p-0">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand border-0 bg-transparent m-0 p-0 text-center"
          >
            <img className="img-fluid w-50 h-20" src={Logo} alt="" />
          </Link>
          <Link
            to="events"
            className="fs-2 text-decoration-none text-white text-white bg-success px-1 rounded"
          >
            Events
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/Auth/login"
                  className="nav-link fs-4 text-white bg-success me-2  rounded"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Auth/register"
                  className="nav-link fs-4 text-white bg-success rounded"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

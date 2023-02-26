import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asserts/images/logo.png";
import { auth } from "../../config/firbase";
import { Authcontext } from "../../context/authcontext";

export default function Navbar() {
  const {isAuthentication}=useContext(Authcontext)
  


  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary  p-0 pb-2 pb-md-0">
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
            className="navbar-toggler border-0 bg-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            {isAuthentication ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                    onClick={handleLogOut}
                    className="nav-link fs-4 text-white bg-success me-2  rounded text-center my-2 my-md-0" >Log Out  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/Auth/login"
                    className="nav-link fs-4 text-white bg-success me-2  rounded text-center my-2 my-md-0"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Auth/register"
                    className="nav-link fs-4 text-white bg-success rounded mt-2 mt-md-0 text-center my-2 my-md-0"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

import React, { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firbase";
import { Link, useNavigate } from "react-router-dom";

const inialState = {
  userName: "",
  email: "",
  password: "",
};

export default function Register() {
  const Navigate = useNavigate();
  const [state, setState] = useState(inialState);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hhsdddddd");

    let { userName, email, password } = state;

    if (!userName) {
      return window.toastify("Please enter your username correctly", "error");
    }
    if (!email) {
      return window.toastify("Please Add Your Email", "error");
    }
    if (password.length < 6) {
      return window.toastify("Please enter your password >= 6", "error");
    }

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);

      });
    Navigate("/events");
  };

  console.log(state);
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="my-1 col-12 col-md-5 col-lg-5 d-flex flex-column rounded-3 bg-primary">
            <h2 className="fw-bold text-center py-4 text-white ">Login</h2>
            <form className="">
              <div className="mb-3 px-5">
                <label className="form-label fs-5 m-0 text-white">
                  <i className="fa-solid fa-envelope"></i> Email
                </label>
                <input
                  name="email"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  type="email"
                  className="form-control form-control-lg w-100 loginInput"
                  placeholder="Type Your Email"
                />
              </div>
              <div className="mb-3 px-5">
                <label className="form-label fs-5 m-0 text-white">
                  <i className="fa-solid fa-lock"></i> Password
                </label>
                <input
                  name="password"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  type="password"
                  className="form-control form-control-lg w-100 loginInput"
                  placeholder="Type Your Password"
                />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-2">
                <button
                  onClick={handleSubmit}
                  className="btn px-3 bg-success border-0 fs-5 fw-bold text-black "
                  type="submit"
                  disabled={isLoading}
                >
                  {!isLoading ? "sign Up " : "Loading..."}
                </button>

                <h6 className="text-center text-white">or Sign in using</h6>
                {/* <Link
                  to="/forgetpassworld"
                  className="float-end border-0 bg-transparent"
                >
                  Forget Passworld?
                </Link> */}
              </div>
            </form>

            <div className="fs-2 mx-auto ">
              <i className="fa-brands fa-facebook text-white"></i>
              <i className="fa-brands fa-twitter text-info px-4"></i>
              <i className="fa-brands fa-google text-danger"></i>
            </div>
            <Link
              to="/auth/register"
              className="margin text-center bg-transparent text-primary border-0 fs-6 d-block"
            >
              New Account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

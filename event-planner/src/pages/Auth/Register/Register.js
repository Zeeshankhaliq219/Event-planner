import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firbase";




const inialState = {
  userName: "",
  email: "",
  password: "",
};


export default function Register() {
  const Navigate = useNavigate()
  const [state, setState] = useState(inialState);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let { userName, email, password } = state;

    if ((!userName)) {
      return window.toastify("Please enter your username correctly", "error");
    }
    if (!email) {
      return window.toastify("Please Add Your Email", "error");
    }
    if (password.length < 6) {
      return window.toastify("Please enter your password >= 6", "error");
    }

    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        // ..
      });
    Navigate ('/')
  };

  console.log(state);
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="my-1 col-12 col-md-5 col-lg-5 d-flex flex-column rounded-3 bg-primary">
            <h2 className="fw-bold text-center py-4 text-white ">Sign Up</h2>
            <form className="">
              <div className="mb-3 px-5">
                <label className="form-label fs-5 m-0 text-white">
                  <i className="fa-solid fa-user"></i> Username
                </label>
                <input
                  name="userName"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  type="text"
                  className="form-control form-control-lg w-100 loginInput"
                  placeholder="Type Your UserName"
                />
              </div>
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

                <h6 className="text-center text-white">or Sign up using</h6>
              </div>
            </form>

            <div className="fs-2 mx-auto ">
              <i className="fa-brands fa-facebook text-white"></i>
              <i className="fa-brands fa-twitter text-info px-4"></i>
              <i className="fa-brands fa-google text-danger"></i>
            </div>
            <Link
              to="/auth/login"
              className="margin text-center bg-transparent text-primary border-0 fs-6 text-white"
            >
              Already a Account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

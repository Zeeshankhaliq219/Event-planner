import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="bg-primary mt-2 col-12 col-md-5 col-lg-5 d-flex flex-column rounded-3 ">
            <h2 className="fw-bold text-center py-4 text-white">Login</h2>
            <form className="">
              <div class="mb-3 px-5">
                <label className="form-label fs-5 text-white">
                  <i class="fa-solid fa-envelope text-"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg w-100 loginInput"
                  placeholder="Type Your Email"
                />
              </div>
              <div class="mb-3 px-5">
                <label className="form-label fs-5  text-white">
                  <i class="fa-solid fa-lock"></i> Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg w-100 loginInput"
                  placeholder="Type Your Password"
                />
                {/* <Link
                  to="/forgetpassworld"
                  className="float-end border-0 bg-transparent"
                >
                  Forget Passworld?
                </Link> */}
              </div>
            </form>
            <div class="d-grid gap-2 col-6 mx-auto ">
              <button
                class="btn border-0 fs-5 bg-success mt-1 fw-bold text-white login"
                type="button"
              >
                Login
              </button>

              <h6 className="text-center text-white">or Sign up using</h6>
            </div>

            <div className="fs-2 mx-auto my-4">
              <i class="fa-brands fa-facebook text-primary text-white"></i>
              <i class="fa-brands fa-twitter text-info px-4"></i>
              <i class="fa-brands fa-google text-danger"></i>
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

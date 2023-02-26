import React from "react";

export default function AddEvent() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto bg-primary mt-5 rounded p-5">
            <h2 className="text-white text-center">Add Event</h2>
            <form>
              <div className="form-group">
                <label for="title" className="text-white">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label for="description" className="text-white">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div className="form-group my-2">
                <label for="location" className="text-white">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter location"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-success fs-4 fw-bold text-white  mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

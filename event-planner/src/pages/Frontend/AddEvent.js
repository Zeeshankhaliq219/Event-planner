import React, { useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../config/firbase";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "context/AuthContext";
// import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  location: "",
  description: "",
  date: "",
  time: "",
};

export default function AddEvent() {
      const [state, setState] = useState(initialState);
       const [added, setAdded] = useState(false);
       const [loading, seIsLoading] = useState(false);

        const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hhsdddddd");

    state.dateCreated = serverTimestamp();
    state.id = window.getRandomId();
    state.createdBy = {
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
    };
    console.log(state);
    setAdded(false);
    seIsLoading(true);

    // Add a new document in collection "cities"
    await setDoc(doc(firestore, "events", state.id), state).then(() => {
      window.toastify("Event added successfully", "success");
      setAdded(true);
      setState(initialState);
    });
    seIsLoading(false);
    navigate("/events")



  };
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
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  name="title"
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
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  name="description"
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
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  name="location"
                  className="form-control"
                  id="location"
                  placeholder="Enter location"
                />
              </div>
              <div className="form-group my-2">
                <label for="time" className="text-white">
                  Date
                </label>
                <input
                  type="date"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  name="time"
                  className="form-control"
                  id="time"
                  placeholder="Enter Time"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-success fs-4 fw-bold text-white  mt-4"
                >
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

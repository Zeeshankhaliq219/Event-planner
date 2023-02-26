import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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


export default function Events() {
  
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
    const [added, setAdded] = useState(false);
  
  useEffect(() => {
    handleGetEvents();
  }, [added]);


  const handleGetEvents = async () => {
    setIsLoading(true);
    let array = [];
    const q = query(
      collection(firestore, "events"),
      // where("createdBy.email", "==",auth.currentUser.email )
      );
    setAdded(false)
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = { firebaseId: doc.id, ...doc.data() };
      array.push(data);
      setAdded(true)
      setData(array);
    });
    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-end ">
            <button className="btn border-0 bg-success mt-3 ">
              <Link
                className="text-decoration-none fs-4 fw-bold text-white"
                to="/addEvent"
              >
                Add Event
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container bg-light p-4 mt-5 ">
        <div className="row ">
          <div className="col">
            <h3>Added Events</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="table-responsive">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                {!loading ? (
                  <tr className="mt-5">
                    <td colSpan="4" className="text-center">
                      <div className="loader ">
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        ></div>
                        <div
                          className="spinner-grow text-secondary mx-3"
                          role="status"
                        ></div>
                        <div
                          className="spinner-grow text-success"
                          role="status"
                        ></div>
                      </div>
                    </td>
                  </tr>
                ) :
                  (
                  <tbody>
                    {data.map((events, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{events.title}</th>
                          <td>{events.location}</td>
                          <td>{events.time}</td>
                          <td>
                            <button
                              className="btn"
                              // onClick={}
                            >
                              {/* <DeleteIcon /> */}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

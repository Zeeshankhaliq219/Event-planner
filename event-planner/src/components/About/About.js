import React from 'react';
import image from '.././../asserts/images/heroSection.jpg'

export default function About() {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-success text-center  text-underline">About</h1>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <h4>
              Welcome to our event application! We're excited to have you here
              and look forward to helping you discover and attend some amazing
              events. With our user-friendly platform, you'll be able to browse
              events, purchase tickets, and connect with other attendees all in
              one place. Whether you're looking for music festivals, sporting
              events, conferences, or something else entirely, we've got you
              covered. Thank you for choosing our event application and we can't
              wait to help you make unforgettable memories!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

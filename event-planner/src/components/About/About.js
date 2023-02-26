import React from 'react';
import image from '.././../asserts/images/heroSection.jpg'

export default function About() {
  return (
      <div>
          <div className="container">
              <div className="row">
                  <div className="col-5">
                      <img src={image} alt="" />
                  </div>
                  <div className="col-5 ">
                      <h1 className='text-center'>hello</h1>
                  </div>
              </div>
          </div>
    </div>
  )
}

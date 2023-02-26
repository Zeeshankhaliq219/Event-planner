import React from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <>
      <div className="container">
        <Link to="/addEvent" >Add Event</Link>
        </div>
    </>
  )
}

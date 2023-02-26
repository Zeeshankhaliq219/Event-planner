import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddEvent from './AddEvent';
import Events from './Events';
import Home from './Home'

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="/addevent" element={<AddEvent />} />
      </Routes>
    </>
  );
}

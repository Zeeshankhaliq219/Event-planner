import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Frontend />} />
            <Route path="/Auth/*" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

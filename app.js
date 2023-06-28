import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/home";
import About from "./src/about";
import Body from "./src/body";
import ContactForm from "./src/contact";
import { HashLink as Link } from "react-router-hash-link";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Body />}></Route>
        </Routes>
          <Link to="#about" element={<About />} />
          <Link to="#contactForm" element={<ContactForm />} />
      </BrowserRouter>
    </div>
  );
}

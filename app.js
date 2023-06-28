import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/home";
import About from "./src/about";
import Body from "./src/body";
import ContactForm from "./src/contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

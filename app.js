import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/home";
import About from "./src/about";
import Body from "./src/body";
import ContactForm from "./src/contact";
import { HashLink as Link } from "react-router-hash-link";
import TechPortfolio from "./src/project";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Body />}></Route>
        </Routes>
          <Link smooth to="#about" element={<About />} />
          <Link smooth to="#contactForm" element={<ContactForm />} />
          <Link smooth to="#project" element={<TechPortfolio />} />
      </BrowserRouter>
    </div>
  );
}

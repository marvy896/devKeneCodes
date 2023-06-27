import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/home";
import About from "./src/about";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

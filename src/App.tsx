import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

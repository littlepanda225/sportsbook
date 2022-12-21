import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NBAPage from "./pages/NBA";
import PrivacyPage from "./pages/Privacy";
import CookiePage from "./pages/Cookie";
import AboutPage from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nba" element={<NBAPage />}></Route>
        <Route path="/privacy" element={<PrivacyPage />}></Route>
        <Route path="/cookie" element={<CookiePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

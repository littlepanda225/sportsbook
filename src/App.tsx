import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NBAPage from "./pages/NBA";
import PrivacyPage from "./pages/Privacy";
import CookiePage from "./pages/Cookie";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nba" element={<NBAPage />}></Route>
        <Route path="/privacy" element={<PrivacyPage />}></Route>
        <Route path="/cookie" element={<CookiePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

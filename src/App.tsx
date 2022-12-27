import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NBAPage from "./pages/NBA";
import PrivacyPage from "./pages/Privacy";
import CookiePage from "./pages/Cookie";
import AboutPage from "./pages/About";
import WNBAPage from "./pages/WNBA";
import NFLPage from "./pages/NFL";
import TermsPage from "./pages/Terms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nba/:id" element={<NBAPage />}></Route>
        <Route path="/privacy" element={<PrivacyPage />}></Route>
        <Route path="/cookie" element={<CookiePage />}></Route>
        <Route path="/terms" element={<TermsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/wnba" element={<WNBAPage />}></Route>
        <Route path="/nfl" element={<NFLPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

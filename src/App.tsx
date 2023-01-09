import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NBAPage from "./pages/NBA";
import PrivacyPage from "./pages/Privacy";
import CookiePage from "./pages/Cookie";
import AboutPage from "./pages/About";
import TermsPage from "./pages/Terms";
import WNBAPage from "./pages/WNBA";
import NFLPage from "./pages/NFL";
import NHLPage from "./pages/NHL";
import NCAAFBPage from "./pages/NCAAFB";
import NCAAMPage from "./pages/NCAAM";
import NewsPage from "./pages/News";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<NBAPage />}></Route>
        <Route path="/privacy" element={<PrivacyPage />}></Route>
        <Route path="/cookie" element={<CookiePage />}></Route>
        <Route path="/terms" element={<TermsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/wnba/:id" element={<WNBAPage />}></Route>
        <Route path="/nfl/:id" element={<NFLPage />}></Route>
        <Route path="/nba/:id" element={<NBAPage />}></Route>
        <Route path="/nhl/:id" element={<NHLPage />}></Route>
        <Route path="/ncaafb/:id" element={<NCAAFBPage />}></Route>
        <Route path="/ncaam/:id" element={<NCAAMPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

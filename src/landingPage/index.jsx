import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import JadwalPage from "./screens/JadwalPage";
import LotMotorPage from "./screens/LotMotorPage";
import BerandaPage from "./screens/BerandaPage";
import LotMobilPage from "./screens/LotMobilPage";
import TentangPage from "./screens/TentangPage";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

// Komponen untuk auto scroll ke atas saat route berubah
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AuctionPlatform = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <ScrollToTop />

      {/* Halaman landing pakai routing */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/lot-motor" element={<LotMotorPage />} />
          <Route path="/lot-mobil" element={<LotMobilPage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/tentang" element={<TentangPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default AuctionPlatform;

import React from "react";
import AppAppBar from "./components/AppAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Jadwal from "./pages/Jadwal";
import LelangMobil from "./pages/LelangMobil";
import LelangMotor from "./pages/LelangMotor";
import Informasi from "./pages/Informasi";

export default function LandingPage() {
  return (
    <Router>
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/lelangMobil" element={<LelangMobil />} />
        <Route path="/lelangMotor" element={<LelangMotor />} />
        <Route path="/informasi" element={<Informasi />} />
      </Routes>
    </Router>
  );
}

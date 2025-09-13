import React, { useEffect, useState } from "react";
import JadwalPage from "./screens/JadwalPage";
import LotMotorPage from "./screens/LotMotorPage";
import BerandaPage from "./screens/berandaPage";
import LotMobilPage from "./screens/LotMobilPage";
import TentangPage from "./screens/TentangPage";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

const AuctionPlatform = () => {
  const [currentPage, setCurrentPage] = useState("beranda");

  useEffect(() => {
    window.scrollTo(0, 0);
    // setiap kali halaman berubah, scroll ke atas
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "beranda":
        return <BerandaPage goTo={setCurrentPage} />;
      case "lot-motor":
        return <LotMotorPage />;
      case "lot-mobil":
        return <LotMobilPage />;
      case "jadwal":
        return <JadwalPage />;
      case "tentang":
        return <TentangPage />;
      default:
        return <BerandaPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} goTo={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
};

export default AuctionPlatform;

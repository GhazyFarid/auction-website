import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./screens/DashboardLayout";
import Context from "./screens/Context";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Context />} />
        <Route path="pengaturan" element={<Context />} />
        <Route path="lelang-motor" element={<Context />} />
        <Route path="lelang-mobil" element={<Context />} />
        <Route path="transaksi" element={<Context />} />
        <Route path="jadwal" element={<Context />} />
        <Route path="deposit" element={<Context />} />
        <Route path="laporan" element={<Context />} />
        {/* dst */}
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;

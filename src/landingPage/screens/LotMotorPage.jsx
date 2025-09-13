import { useState } from "react";
import { FilterSection } from "../components/FilterSection";
import { VehicleCard } from "../components/VehicleCard";
import { allMotors, motorBrands } from "../constants/dataDumyMotors";

const LotMotorPage = () => {
  const [motorFilters, setMotorFilters] = useState({
    pool: "",
    merek: "",
    type: "",
    harga: "",
  });

  const filteredMotors = allMotors.filter((motor) => {
    return (
      (!motorFilters.pool || motor.pool === motorFilters.pool) &&
      (!motorFilters.merek ||
        motor.nama.toLowerCase().includes(motorFilters.merek.toLowerCase()))
    );
  });

  const sortedMotors = [...filteredMotors].sort((a, b) => {
    if (motorFilters.harga === "terendah") return a.harga - b.harga;
    if (motorFilters.harga === "tertinggi") return b.harga - a.harga;
    return 0;
  });

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          {/* <Motorcycle className="mr-3" /> */}
          Lot Motor
        </h1>

        <FilterSection
          filters={motorFilters}
          setFilters={setMotorFilters}
          brands={motorBrands}
          type="Motor"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMotors.map((motor) => (
            <VehicleCard key={motor.id} vehicle={motor} type="motor" />
          ))}
        </div>

        {sortedMotors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Tidak ada motor yang sesuai dengan filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LotMotorPage;

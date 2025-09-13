import { useState } from "react";
import { allMobils, carBrands } from "../constants/dataDumyMobil";
import { Car } from "lucide-react";
import { FilterSection } from "../components/FilterSection";
import { VehicleCard } from "../components/VehicleCard";

const LotMobilPage = () => {
  const [mobilFilters, setMobilFilters] = useState({
    pool: "",
    merek: "",
    type: "",
    harga: "",
  });

  const filteredMobils = allMobils.filter((mobil) => {
    return (
      (!mobilFilters.pool || mobil.pool === mobilFilters.pool) &&
      (!mobilFilters.merek ||
        mobil.nama.toLowerCase().includes(mobilFilters.merek.toLowerCase()))
    );
  });

  const sortedMobils = [...filteredMobils].sort((a, b) => {
    if (mobilFilters.harga === "terendah") return a.harga - b.harga;
    if (mobilFilters.harga === "tertinggi") return b.harga - a.harga;
    return 0;
  });

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <Car className="mr-3" />
          Lot Mobil
        </h1>

        <FilterSection
          filters={mobilFilters}
          setFilters={setMobilFilters}
          brands={carBrands}
          type="Mobil"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMobils.map((mobil) => (
            <VehicleCard key={mobil.id} vehicle={mobil} type="mobil" />
          ))}
        </div>

        {sortedMobils.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Tidak ada mobil yang sesuai dengan filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LotMobilPage;

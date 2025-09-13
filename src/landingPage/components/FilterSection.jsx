import { Filter } from "lucide-react";
import { poolLocations } from "../constants/dumy";

export const FilterSection = ({ filters, setFilters, brands, type }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-lg font-semibold mb-4 flex items-center">
      <Filter className="mr-2" />
      Filter {type}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Lokasi Pool
        </label>
        <select
          value={filters.pool}
          onChange={(e) => setFilters({ ...filters, pool: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Semua Lokasi</option>
          {poolLocations.map((pool) => (
            <option key={pool} value={pool}>
              {pool}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Merek
        </label>
        <select
          value={filters.merek}
          onChange={(e) => setFilters({ ...filters, merek: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Semua Merek</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Urutkan Harga
        </label>
        <select
          value={filters.harga}
          onChange={(e) => setFilters({ ...filters, harga: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Default</option>
          <option value="terendah">Harga Terendah</option>
          <option value="tertinggi">Harga Tertinggi</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          onClick={() =>
            setFilters({ pool: "", merek: "", type: "", harga: "" })
          }
          className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Reset Filter
        </button>
      </div>
    </div>
  </div>
);

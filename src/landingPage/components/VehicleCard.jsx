import { MapPin } from "lucide-react";
import { formatPrice } from "../function/formatPrice";

export const VehicleCard = ({ vehicle, type }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img
      src={vehicle.image}
      alt={vehicle.nama}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{vehicle.nama}</h3>
      <p className="text-gray-600 mb-2">Tahun: {vehicle.tahun}</p>
      <div className="flex items-center mb-2">
        <MapPin className="h-4 w-4 text-gray-500 mr-1" />
        <span className="text-sm text-gray-600">{vehicle.pool}</span>
      </div>
      <p className="text-xl font-bold text-blue-600">
        {formatPrice(vehicle.harga)}
      </p>
      <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Lihat Detail
      </button>
    </div>
  </div>
);

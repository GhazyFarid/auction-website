import { Car } from "lucide-react";
import { daftarPage } from "../constants/daftarMenu";

export const Navigation = ({ currentPage, goTo }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">AutoLelang</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {daftarPage.map((item) => (
              <button
                key={item.key}
                onClick={() => goTo(item.key)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
};

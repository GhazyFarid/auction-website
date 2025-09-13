import { CarouselBanner } from "../components/carouselBanner";
import { VehicleCard } from "../components/VehicleCard";
import { mobilRecommendations } from "../constants/dataDumyMobil";
import { motorRecommendations } from "../constants/dataDumyMotors";

const BerandaPage = ({ goTo }) => {
  return (
    <div>
      <CarouselBanner goto={goTo} />

      {/* Rekomendasi Motor */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Rekomendasi Unit Motor
            </h2>
            <p className="text-gray-600">
              Motor berkualitas dengan harga terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motorRecommendations.map((motor) => (
              <VehicleCard key={motor.id} vehicle={motor} type="motor" />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                console.log("handle Click motor");
                goTo("lot-motor");
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Lihat Semua Motor
            </button>
          </div>
        </div>
      </section>

      {/* Rekomendasi Mobil */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Rekomendasi Unit Mobil
            </h2>
            <p className="text-gray-600">Mobil pilihan dengan kondisi prima</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobilRecommendations.map((mobil) => (
              <VehicleCard key={mobil.id} vehicle={mobil} type="mobil" />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                console.log("handle Click mobil");
                goTo("lot-mobil");
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Lihat Semua Mobil
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BerandaPage;

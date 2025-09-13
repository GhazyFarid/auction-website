import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "../constants/dumy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CarouselBanner = () => {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-advance banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden bg-gray-900">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentBanner ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {banner.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">{banner.subtitle}</p>
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => navigate(banner.path)}
              >
                {banner.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentBanner(
            (prev) => (prev - 1 + banners.length) % banners.length
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

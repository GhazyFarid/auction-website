import { Car, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">AutoLelang</span>
          </div>
          <p className="text-gray-300">
            Platform lelang kendaraan terpercaya dengan proses yang transparan
            dan aman.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Layanan</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Lelang Motor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Lelang Mobil
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Jadwal Lelang
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Panduan Lelang
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Hubungi Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>0800-1-LELANG</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@autolelang.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2024 AutoLelang. Semua hak dilindungi undang-undang.</p>
      </div>
    </div>
  </footer>
);

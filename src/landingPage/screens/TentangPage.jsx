import {
  Award,
  Mail,
  MapPin,
  MapPinIcon,
  Phone,
  Star,
  Users,
} from "lucide-react";

const TentangPage = () => {
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tentang Kami</h1>

        {/* Histori Perusahaan */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-3 text-blue-600" />
            Histori Perusahaan
          </h2>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              AutoLelang didirikan pada tahun 2015 dengan visi menjadi platform
              lelang kendaraan terdepan di Indonesia. Kami berkomitmen untuk
              menyediakan layanan lelang yang transparan, aman, dan
              menguntungkan bagi semua pihak.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">50,000+</h3>
                <p className="text-gray-600">Pelanggan Terdaftar</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">98%</h3>
                <p className="text-gray-600">Tingkat Kepuasan</p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">5,000+</h3>
                <p className="text-gray-600">Transaksi Sukses</p>
              </div>
            </div>

            <p className="text-gray-700">
              Dengan pengalaman lebih dari 8 tahun, kami telah membantu ribuan
              pelanggan mendapatkan kendaraan impian mereka melalui proses
              lelang yang fair dan terpercaya. Tim profesional kami selalu siap
              memberikan pelayanan terbaik untuk memastikan pengalaman lelang
              yang memuaskan.
            </p>
          </div>
        </div>

        {/* Lokasi Pool */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <MapPinIcon className="mr-3 text-blue-600" />
            Lokasi Pool
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Pool Jakarta</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Jl. Raya Surabaya No. 456</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(031) 555-0456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>surabaya@autolelang.com</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Pool Bandung</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Jl. Raya Bandung No. 789</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(022) 555-0789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>bandung@autolelang.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangPage;

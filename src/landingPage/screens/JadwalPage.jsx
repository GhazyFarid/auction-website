import { MapPin, Calendar } from "lucide-react";

const JadwalPage = () => {
  const jadwalLelang = [
    {
      id: 1,
      tanggal: "15 Sept 2024",
      waktu: "09:00",
      jenis: "Motor",
      lokasi: "Jakarta",
      total: 25,
    },
    {
      id: 2,
      tanggal: "16 Sept 2024",
      waktu: "10:00",
      jenis: "Mobil",
      lokasi: "Surabaya",
      total: 18,
    },
    {
      id: 3,
      tanggal: "17 Sept 2024",
      waktu: "09:30",
      jenis: "Motor",
      lokasi: "Bandung",
      total: 32,
    },
    {
      id: 4,
      tanggal: "18 Sept 2024",
      waktu: "11:00",
      jenis: "Mobil",
      lokasi: "Jakarta",
      total: 22,
    },
  ];

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <Calendar className="mr-3" />
          Jadwal Lelang
        </h1>

        <div className="grid gap-6">
          {jadwalLelang.map((jadwal) => (
            <div
              key={jadwal.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-lg font-semibold">
                      {jadwal.tanggal}
                    </span>
                    <span className="ml-4 text-gray-600">
                      {jadwal.waktu} WIB
                    </span>
                  </div>

                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">{jadwal.lokasi}</span>
                  </div>

                  <div className="flex items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        jadwal.jenis === "Motor"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {jadwal.jenis}
                    </span>
                    <span className="ml-4 text-gray-600">
                      {jadwal.total} Unit
                    </span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Daftar Lelang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JadwalPage;

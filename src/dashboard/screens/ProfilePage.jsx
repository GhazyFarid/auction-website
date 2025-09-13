import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
  Shield,
  Eye,
  EyeOff,
  Upload,
  DollarSign,
  Car,
  AlertCircle,
  Check,
  Edit,
  Save,
  X,
  Camera,
  Lock,
  Bell,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("data-diri");
  const [isEditing, setIsEditing] = useState({});
  const [showPassword, setShowPassword] = useState({});
  const [userData2, setUserData] = useState({
    // Data Diri
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "08123456789",
    address: "Jl. Merdeka No. 123, Jakarta",
    city: "Jakarta",
    postalCode: "12345",
    idNumber: "1234567890123456",
    // Data Bank
    bankName: "Bank BCA",
    accountNumber: "1234567890",
    accountName: "John Doe",
    // Security
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    // Settings
    emailNotif: true,
    smsNotif: false,
    marketingNotif: true,
    twoFactorAuth: false,
  });

  const [deposits, setDeposits] = useState([
    {
      id: 1,
      amount: 5000000,
      bank: "BCA",
      status: "approved",
      date: "2024-09-10",
      receipt: "receipt1.jpg",
    },
    {
      id: 2,
      amount: 3000000,
      bank: "Mandiri",
      status: "pending",
      date: "2024-09-12",
      receipt: "receipt2.jpg",
    },
  ]);

  const [payments, setPayments] = useState([
    {
      id: 1,
      unit: "Honda Vario 150 - B1234XYZ",
      amount: 18500000,
      status: "completed",
      date: "2024-09-08",
    },
    {
      id: 2,
      unit: "Toyota Avanza - B5678ABC",
      amount: 185000000,
      status: "pending",
      date: "2024-09-11",
    },
  ]);

  const [depositForm, setDepositForm] = useState({
    amount: "",
    returnBank: "",
    returnAccount: "",
    returnName: "",
    receipt: null,
  });

  const [paymentForm, setPaymentForm] = useState({
    unit: "",
    amount: "",
    receipt: null,
  });

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = (field) => {
    // Simulate save to backend
    setIsEditing((prev) => ({ ...prev, [field]: false }));
    alert(`${field} berhasil disimpan!`);
  };

  const handleFileUpload = (file, type, form, setForm) => {
    if (file) {
      setForm((prev) => ({ ...prev, [type]: file }));
    }
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    const newDeposit = {
      id: deposits.length + 1,
      amount: parseInt(depositForm.amount),
      bank: depositForm.returnBank,
      status: "pending",
      date: new Date().toISOString().split("T")[0],
      receipt: depositForm.receipt?.name || "new-receipt.jpg",
    };
    setDeposits([...deposits, newDeposit]);
    setDepositForm({
      amount: "",
      returnBank: "",
      returnAccount: "",
      returnName: "",
      receipt: null,
    });
    alert("Deposit berhasil disubmit dan sedang diproses!");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const newPayment = {
      id: payments.length + 1,
      unit: paymentForm.unit,
      amount: parseInt(paymentForm.amount),
      status: "pending",
      date: new Date().toISOString().split("T")[0],
    };
    setPayments([...payments, newPayment]);
    setPaymentForm({ unit: "", amount: "", receipt: null });
    alert("Bukti pelunasan berhasil disubmit dan sedang diproses!");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const tabs = [
    { id: "data-diri", label: "Data Diri", icon: User },
    { id: "data-bank", label: "Data Bank", icon: CreditCard },
    { id: "keamanan", label: "Privasi & Keamanan", icon: Shield },
    { id: "deposit", label: "Deposit", icon: DollarSign },
    { id: "pelunasan", label: "Pelunasan", icon: Car },
  ];

  const renderDataDiri = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Data Diri</h2>
        <div className="relative">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-gray-500" />
          </div>
          <button className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full text-white hover:bg-blue-700">
            <Camera className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap
          </label>
          <div className="flex items-center">
            {isEditing.fullName ? (
              <input
                type="text"
                value={userData2.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.fullName}</span>
            )}
            <button
              onClick={() =>
                isEditing.fullName
                  ? handleSave("fullName")
                  : handleEditToggle("fullName")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.fullName ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="flex items-center">
            {isEditing.email ? (
              <input
                type="email"
                value={userData2.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.email}</span>
            )}
            <button
              onClick={() =>
                isEditing.email
                  ? handleSave("email")
                  : handleEditToggle("email")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.email ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nomor Telepon
          </label>
          <div className="flex items-center">
            {isEditing.phone ? (
              <input
                type="tel"
                value={userData2.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.phone}</span>
            )}
            <button
              onClick={() =>
                isEditing.phone
                  ? handleSave("phone")
                  : handleEditToggle("phone")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.phone ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* ID Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nomor KTP
          </label>
          <div className="flex items-center">
            {isEditing.idNumber ? (
              <input
                type="text"
                value={userData2.idNumber}
                onChange={(e) => handleInputChange("idNumber", e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.idNumber}</span>
            )}
            <button
              onClick={() =>
                isEditing.idNumber
                  ? handleSave("idNumber")
                  : handleEditToggle("idNumber")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.idNumber ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alamat
          </label>
          <div className="flex items-start">
            {isEditing.address ? (
              <textarea
                value={userData2.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={3}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.address}</span>
            )}
            <button
              onClick={() =>
                isEditing.address
                  ? handleSave("address")
                  : handleEditToggle("address")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.address ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kota
          </label>
          <div className="flex items-center">
            {isEditing.city ? (
              <input
                type="text"
                value={userData2.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.city}</span>
            )}
            <button
              onClick={() =>
                isEditing.city ? handleSave("city") : handleEditToggle("city")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.city ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kode Pos
          </label>
          <div className="flex items-center">
            {isEditing.postalCode ? (
              <input
                type="text"
                value={userData2.postalCode}
                onChange={(e) =>
                  handleInputChange("postalCode", e.target.value)
                }
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.postalCode}</span>
            )}
            <button
              onClick={() =>
                isEditing.postalCode
                  ? handleSave("postalCode")
                  : handleEditToggle("postalCode")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.postalCode ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataBank = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Data Bank</h2>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
          <span className="text-sm text-yellow-800">
            Data bank digunakan untuk pengembalian deposit dan pembayaran
            kemenangan lelang
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bank Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Bank
          </label>
          <div className="flex items-center">
            {isEditing.bankName ? (
              <select
                value={userData2.bankName}
                onChange={(e) => handleInputChange("bankName", e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="Bank BCA">Bank BCA</option>
                <option value="Bank Mandiri">Bank Mandiri</option>
                <option value="Bank BNI">Bank BNI</option>
                <option value="Bank BRI">Bank BRI</option>
                <option value="Bank CIMB Niaga">Bank CIMB Niaga</option>
              </select>
            ) : (
              <span className="flex-1 p-2">{userData2.bankName}</span>
            )}
            <button
              onClick={() =>
                isEditing.bankName
                  ? handleSave("bankName")
                  : handleEditToggle("bankName")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.bankName ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nomor Rekening
          </label>
          <div className="flex items-center">
            {isEditing.accountNumber ? (
              <input
                type="text"
                value={userData2.accountNumber}
                onChange={(e) =>
                  handleInputChange("accountNumber", e.target.value)
                }
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.accountNumber}</span>
            )}
            <button
              onClick={() =>
                isEditing.accountNumber
                  ? handleSave("accountNumber")
                  : handleEditToggle("accountNumber")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.accountNumber ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Account Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Pemilik Rekening
          </label>
          <div className="flex items-center">
            {isEditing.accountName ? (
              <input
                type="text"
                value={userData2.accountName}
                onChange={(e) =>
                  handleInputChange("accountName", e.target.value)
                }
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="flex-1 p-2">{userData2.accountName}</span>
            )}
            <button
              onClick={() =>
                isEditing.accountName
                  ? handleSave("accountName")
                  : handleEditToggle("accountName")
              }
              className="ml-2 p-2 text-blue-600 hover:text-blue-800"
            >
              {isEditing.accountName ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKeamanan = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Privasi & Keamanan</h2>

      {/* Password Change */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Ubah Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Saat Ini
            </label>
            <div className="relative">
              <input
                type={showPassword.current ? "text" : "password"}
                value={userData2.currentPassword}
                onChange={(e) =>
                  handleInputChange("currentPassword", e.target.value)
                }
                className="w-full pr-10 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan password saat ini"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }))
                }
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword.current ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Baru
            </label>
            <div className="relative">
              <input
                type={showPassword.new ? "text" : "password"}
                value={userData2.newPassword}
                onChange={(e) =>
                  handleInputChange("newPassword", e.target.value)
                }
                className="w-full pr-10 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan password baru"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword.new ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Konfirmasi Password Baru
            </label>
            <div className="relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                value={userData2.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="w-full pr-10 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Konfirmasi password baru"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }))
                }
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword.confirm ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              if (userData2.newPassword === userData2.confirmPassword) {
                alert("Password berhasil diubah!");
                setUserData((prev) => ({
                  ...prev,
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                }));
              } else {
                alert("Konfirmasi password tidak sesuai!");
              }
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ubah Password
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Bell className="mr-2" />
          Pengaturan Notifikasi
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium text-gray-700">
                Notifikasi Email
              </label>
              <p className="text-sm text-gray-500">
                Terima notifikasi lelang melalui email
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={userData2.emailNotif}
                onChange={(e) =>
                  handleInputChange("emailNotif", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium text-gray-700">
                Notifikasi SMS
              </label>
              <p className="text-sm text-gray-500">
                Terima notifikasi lelang melalui SMS
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={userData2.smsNotif}
                onChange={(e) =>
                  handleInputChange("smsNotif", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium text-gray-700">Marketing</label>
              <p className="text-sm text-gray-500">
                Terima informasi promosi dan penawaran khusus
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={userData2.marketingNotif}
                onChange={(e) =>
                  handleInputChange("marketingNotif", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Two Factor Authentication */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Lock className="mr-2" />
          Autentikasi Dua Faktor
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">
              Status: {userData2.twoFactorAuth ? "Aktif" : "Nonaktif"}
            </p>
            <p className="text-sm text-gray-500">
              Tambahan keamanan dengan kode verifikasi melalui SMS atau aplikasi
            </p>
          </div>
          <button
            onClick={() => {
              handleInputChange("twoFactorAuth", !userData2.twoFactorAuth);
              alert(
                `Autentikasi dua faktor ${
                  !userData2.twoFactorAuth ? "diaktifkan" : "dinonaktifkan"
                }!`
              );
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              userData2.twoFactorAuth
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {userData2.twoFactorAuth ? "Nonaktifkan" : "Aktifkan"}
          </button>
        </div>
      </div>
    </div>
  );

  const renderDeposit = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Deposit</h2>
        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <span className="text-sm text-blue-600 font-medium">
            Saldo Deposit: {formatCurrency(8000000)}
          </span>
        </div>
      </div>

      {/* Add New Deposit */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Tambah Deposit Baru</h3>
        <form onSubmit={handleDepositSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jumlah Deposit *
              </label>
              <input
                type="number"
                value={depositForm.amount}
                onChange={(e) =>
                  setDepositForm((prev) => ({
                    ...prev,
                    amount: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Minimal Rp 1.000.000"
                min="1000000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Pengembalian *
              </label>
              <select
                value={depositForm.returnBank}
                onChange={(e) =>
                  setDepositForm((prev) => ({
                    ...prev,
                    returnBank: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih Bank</option>
                <option value="BCA">Bank BCA</option>
                <option value="Mandiri">Bank Mandiri</option>
                <option value="BNI">Bank BNI</option>
                <option value="BRI">Bank BRI</option>
                <option value="CIMB">Bank CIMB Niaga</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Rekening *
              </label>
              <input
                type="text"
                value={depositForm.returnAccount}
                onChange={(e) =>
                  setDepositForm((prev) => ({
                    ...prev,
                    returnAccount: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Nomor rekening pengembalian"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Pemilik Rekening *
              </label>
              <input
                type="text"
                value={depositForm.returnName}
                onChange={(e) =>
                  setDepositForm((prev) => ({
                    ...prev,
                    returnName: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Nama sesuai rekening"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Bukti Transfer *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "receipt",
                    depositForm,
                    setDepositForm
                  )
                }
                className="hidden"
                id="deposit-receipt"
                required
              />
              <label htmlFor="deposit-receipt" className="cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  {depositForm.receipt
                    ? depositForm.receipt.name
                    : "Klik untuk upload bukti transfer"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Format: JPG, PNG, PDF (Max 5MB)
                </p>
              </label>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">
              Informasi Transfer:
            </h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>
                <strong>Bank:</strong> BCA
              </p>
              <p>
                <strong>Nomor Rekening:</strong> 1234567890
              </p>
              <p>
                <strong>Atas Nama:</strong> PT AutoLelang Indonesia
              </p>
              <p className="mt-2 font-medium">
                Transfer sesuai jumlah yang tertera dan upload bukti transfer
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Deposit
          </button>
        </form>
      </div>

      {/* Deposit History */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Riwayat Deposit</h3>
        <div className="space-y-4">
          {deposits.map((deposit) => (
            <div
              key={deposit.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-semibold">
                      {formatCurrency(deposit.amount)}
                    </p>
                    <p className="text-sm text-gray-600">
                      {deposit.date} • Bank {deposit.bank}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    deposit.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : deposit.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {deposit.status === "approved"
                    ? "Disetujui"
                    : deposit.status === "pending"
                    ? "Pending"
                    : "Ditolak"}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  Lihat Bukti
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPelunasan = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Pelunasan</h2>

      {/* Add New Payment */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Upload Bukti Pelunasan</h3>
        <form onSubmit={handlePaymentSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit Kendaraan *
              </label>
              <select
                value={paymentForm.unit}
                onChange={(e) =>
                  setPaymentForm((prev) => ({ ...prev, unit: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih Unit yang Akan Dibayar</option>
                <option value="Honda Vario 150 - B1234XYZ">
                  Honda Vario 150 - B1234XYZ
                </option>
                <option value="Toyota Avanza - B5678ABC">
                  Toyota Avanza - B5678ABC
                </option>
                <option value="Yamaha NMAX - B9999DEF">
                  Yamaha NMAX - B9999DEF
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jumlah Pembayaran *
              </label>
              <input
                type="number"
                value={paymentForm.amount}
                onChange={(e) =>
                  setPaymentForm((prev) => ({
                    ...prev,
                    amount: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Jumlah yang dibayar"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Bukti Pelunasan *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "receipt",
                    paymentForm,
                    setPaymentForm
                  )
                }
                className="hidden"
                id="payment-receipt"
                required
              />
              <label htmlFor="payment-receipt" className="cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  {paymentForm.receipt
                    ? paymentForm.receipt.name
                    : "Klik untuk upload bukti pelunasan"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Format: JPG, PNG, PDF (Max 5MB)
                </p>
              </label>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">
              Informasi Pembayaran:
            </h4>
            <div className="text-sm text-green-700 space-y-1">
              <p>
                • Upload bukti transfer pelunasan unit kendaraan yang telah
                dimenangkan
              </p>
              <p>
                • Pastikan jumlah transfer sesuai dengan harga kemenangan lelang
              </p>
              <p>
                • Setelah verifikasi, unit kendaraan dapat diambil di pool yang
                ditentukan
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit Bukti Pelunasan
          </button>
        </form>
      </div>

      {/* Payment History */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Riwayat Pelunasan</h3>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold">{payment.unit}</p>
                  <p className="text-lg font-bold text-green-600">
                    {formatCurrency(payment.amount)}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    payment.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : payment.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {payment.status === "completed"
                    ? "Selesai"
                    : payment.status === "pending"
                    ? "Diproses"
                    : "Ditolak"}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Tanggal: {payment.date}</span>
                <button className="text-blue-600 hover:text-blue-800">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "data-diri":
        return renderDataDiri();
      case "data-bank":
        return renderDataBank();
      case "keamanan":
        return renderKeamanan();
      case "deposit":
        return renderDeposit();
      case "pelunasan":
        return renderPelunasan();
      default:
        return renderDataDiri();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                AutoLelang
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Halo, {userData2.fullName}</span>
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
              <div className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

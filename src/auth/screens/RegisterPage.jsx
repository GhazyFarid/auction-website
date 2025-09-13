import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Car,
  AlertCircle,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: "",
    email: "",
    phone: "",
    // Step 2: Account Security
    password: "",
    confirmPassword: "",
    // Step 3: Agreement
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Nama lengkap wajib diisi";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Nama lengkap minimal 2 karakter";
    }

    if (!formData.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.phone) {
      newErrors.phone = "Nomor telepon wajib diisi";
    } else if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }

    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password harus mengandung huruf besar, kecil, dan angka";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password wajib diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password tidak sama";
    }

    return newErrors;
  };

  const validateStep3 = () => {
    const newErrors = {};

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = "Anda harus menyetujui kebijakan privasi";
    }

    return newErrors;
  };

  const handleNext = () => {
    let newErrors = {};

    if (step === 1) {
      newErrors = validateStep1();
    } else if (step === 2) {
      newErrors = validateStep2();
    }

    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleSubmit = async () => {
    const newErrors = validateStep3();

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulasi register API call
      setTimeout(() => {
        setIsLoading(false);
        // onRegister && onRegister(formData);
        alert("Registrasi berhasil! Silakan cek email untuk verifikasi.");
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Data Diri</h2>
        <p className="text-gray-600">Masukkan informasi dasar Anda</p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nama Lengkap *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Masukkan nama lengkap"
          />
        </div>
        {errors.fullName && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.fullName}
          </div>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Masukkan email"
          />
        </div>
        {errors.email && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.email}
          </div>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nomor Telepon *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Contoh: 08123456789"
          />
        </div>
        {errors.phone && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.phone}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Keamanan Akun</h2>
        <p className="text-gray-600">Buat password yang kuat untuk akun Anda</p>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password *
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Masukkan password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.password}
          </div>
        )}
        <div className="mt-2 text-sm text-gray-500">
          Password harus mengandung minimal 6 karakter, huruf besar, kecil, dan
          angka
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Konfirmasi Password *
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Ulangi password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <div className="flex items-center mt-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.confirmPassword}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Persetujuan</h2>
        <p className="text-gray-600">Baca dan setujui ketentuan berikut</p>
      </div>

      {/* Terms Agreement */}
      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            className={`h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 ${
              errors.agreeTerms ? "border-red-500" : ""
            }`}
          />
          <div className="ml-3">
            <label className="text-sm text-gray-700">
              Saya menyetujui{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Syarat dan Ketentuan
              </a>{" "}
              AutoLelang *
            </label>
            {errors.agreeTerms && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.agreeTerms}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleInputChange}
            className={`h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 ${
              errors.agreePrivacy ? "border-red-500" : ""
            }`}
          />
          <div className="ml-3">
            <label className="text-sm text-gray-700">
              Saya menyetujui{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Kebijakan Privasi
              </a>{" "}
              AutoLelang *
            </label>
            {errors.agreePrivacy && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.agreePrivacy}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreeMarketing"
            checked={formData.agreeMarketing}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <div className="ml-3">
            <label className="text-sm text-gray-700">
              Saya bersedia menerima informasi promosi dan update terbaru dari
              AutoLelang
              <span className="text-gray-500 text-xs block">(Opsional)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">
          Ringkasan Pendaftaran:
        </h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium">Nama:</span> {formData.fullName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {formData.email}
          </p>
          <p>
            <span className="font-medium">Telepon:</span> {formData.phone}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Car className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">AutoLelang</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Akun</h1>
          <p className="text-gray-600">
            Bergabunglah dengan komunitas lelang terpercaya
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > stepNumber ? <Check className="h-4 w-4" /> : stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-12 h-1 mx-2 ${
                    step > stepNumber ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Kembali
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Selanjutnya
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mendaftar...
                  </div>
                ) : (
                  "Daftar Sekarang"
                )}
              </button>
            )}
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Sudah punya akun?{" "}
            <button
              onClick={() => navigate("/auth")}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Masuk di sini
            </button>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

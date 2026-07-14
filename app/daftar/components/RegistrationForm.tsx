"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileSection from "./ProfilSection";
import BankSection from "./BankSection";
import CooperativeSection from "./CooperativeSection";
import { AlertCircle, ArrowLeft, Save, RotateCcw } from "lucide-react";

export default function RegistrationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: "Profile Lembaga", icon: "👤" },
    { id: 2, title: "Data Bank", icon: "🏦" },
    { id: 3, title: "Data Koperasi", icon: "🤝" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push("/login?registered=true");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (confirm("Yakin ingin mereset semua data?")) {
      window.location.reload();
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1 h-12 bg-[#0d6b70] rounded-full" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Pendaftaran Kelembagaan Pekebun</h1>
            <p className="mt-1 text-gray-500 text-sm">Lengkapi seluruh data pendaftaran kelembagaan dengan benar</p>
          </div>
        </div>
      </div>

      {/* Steps Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  currentStep >= step.id ? "bg-[#0d6b70] text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {step.icon}
                </div>
                <div className="hidden md:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? "text-[#0d6b70]" : "text-gray-400"
                  }`}>
                    {step.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 ${
                  currentStep > step.id ? "bg-[#0d6b70]" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info Alert */}
      <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800 text-sm">Informasi Penting</h4>
            <ul className="mt-2 space-y-1 text-sm text-blue-700">
              <li>• Kolom bertanda (<span className="text-red-500">*</span>) wajib diisi</li>
              <li>• Pastikan email yang digunakan masih aktif</li>
              <li>• Ukuran maksimal dokumen adalah 10 MB</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          <ProfileSection />
          <BankSection />
          <CooperativeSection />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex items-center gap-2 px-6 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft size={18} />
              Kembali
            </button>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <RotateCcw size={18} />
                Reset
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-8 py-2.5 bg-[#0d6b70] text-white hover:bg-[#0a5559] rounded-lg transition-colors font-medium disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Memproses...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Daftar Sekarang
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
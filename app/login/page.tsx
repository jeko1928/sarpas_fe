"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-5">
          
          {/* Left Sidebar - Branding */}
          <div className="md:col-span-2 bg-[#0d6b70] p-8 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="bg-white/10 rounded-xl p-4 inline-block mb-6">
                <Image
                  src="/bpdplogo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="brightness-0 invert"
                />
              </div>
              <h1 className="text-white text-2xl font-bold mb-2">SARPRAS</h1>
              <p className="text-white/70 text-sm">
                Sistem Informasi Sarana dan Prasarana
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span>Monitoring real-time</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span>Laporan terintegrasi</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span>Akses multi-user</span>
              </div>
            </div>

            <div className="text-white/40 text-xs">
              v2.0.1
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:col-span-3 p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Selamat Datang</h2>
              <p className="text-gray-500 text-sm mt-1">
                Masuk untuk mengakses dashboard SARPRAS
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="nama@perusahaan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0d6b70] focus:ring-[#0d6b70]" />
                  Ingat Saya
                </label>
                <Link href="/forgot-password" className="text-sm text-[#0d6b70] hover:text-[#0a5559] font-medium">
                  Lupa Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0d6b70] text-white py-3 rounded-lg font-medium hover:bg-[#0a5559] transition duration-200 disabled:opacity-70"
              >
                {isLoading ? "Memproses..." : "Masuk"}
              </button>


              <div className="text-center text-sm text-gray-500 pt-2">
                Belum memiliki akun?{" "}
                <Link href="/daftar" className="text-[#0d6b70] font-medium hover:underline">
                  Daftar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
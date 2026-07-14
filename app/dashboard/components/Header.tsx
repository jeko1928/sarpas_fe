"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bell, User, ChevronDown, LogOut, Settings, HelpCircle } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h2>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
          Production
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-[#0d6b70] flex items-center justify-center text-white font-semibold text-sm">
              KB
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-gray-800">Karyawan Baroe</p>
              <p className="text-xs text-gray-500">karyawanbaroe@gmail.com</p>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">Karyawan Baroe</p>
                <p className="text-xs text-gray-500">karyawanbaroe@gmail.com</p>
              </div>
              
              <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <User size={16} />
                <span>Profile</span>
              </button>
              
              <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <Settings size={16} />
                <span>Pengaturan</span>
              </button>
              
              <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <HelpCircle size={16} />
                <span>Bantuan</span>
              </button>
              
              <div className="border-t border-gray-100">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
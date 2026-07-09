"use client";

import Image from "next/image";
import {
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8 shadow-sm">

      {/* Left */}
      <div>

        <h1 className="text-2xl font-bold text-gray-800">
          Lembaga
        </h1>

        <p className="text-sm text-gray-500">
          Dashboard SARPRAS
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <button className="rounded-full p-2 hover:bg-gray-100">
          <HelpCircle size={20} />
        </button>

        <div className="h-8 w-px bg-gray-300" />

        <div className="flex items-center gap-3">

          <Image
            src="/avatar.png"
            alt="User"
            width={42}
            height={42}
            className="rounded-full"
          />

          <div>

            <h4 className="text-sm font-semibold">
              karyawanbaroe@gmail.com
            </h4>

            <p className="text-xs text-gray-500">
              Administrator
            </p>

          </div>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-red-500
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-red-600
          "
        >
          <LogOut size={17} />

          Logout
        </button>

      </div>

    </header>
  );
}
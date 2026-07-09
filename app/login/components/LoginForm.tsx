"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">

      {/* Email */}
      <div>

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Alamat Email
        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            placeholder="Alamat Email Terdaftar"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              pl-11
              pr-4
              text-sm
              transition
              outline-none
              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-100
            "
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <div className="mb-2 flex items-center justify-between">

          <label className="text-sm font-medium text-gray-700">
            Password
          </label>

          <Link
            href="/forgot-password"
            className="text-sm text-emerald-600 hover:underline"
          >
            Lupa Password?
          </Link>

        </div>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan Password"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              pl-11
              pr-12
              text-sm
              transition
              outline-none
              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-100
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              hover:text-emerald-600
            "
          >
            {showPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}
          </button>

        </div>

      </div>

      {/* Remember */}

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-gray-600">

          <input
            type="checkbox"
            className="
              h-4
              w-4
              rounded
              border-gray-300
              text-emerald-600
              focus:ring-emerald-500
            "
          />

          Ingat Saya

        </label>

        <span className="text-xs text-gray-400">
          Versi 1.0
        </span>

      </div>

      {/* Button */}

      <button
        type="submit"
        className="
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-emerald-600
          to-green-600
          text-white
          font-semibold
          shadow-lg
          transition
          hover:scale-[1.01]
          hover:shadow-xl
          active:scale-[0.99]
        "
      >
        <LogIn size={18} />

        Masuk

      </button>

      {/* Divider */}

      <div className="relative">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>

        <div className="relative flex justify-center">

          <span className="bg-slate-50 px-3 text-xs text-gray-400">
            SARPRAS BPDP
          </span>

        </div>

      </div>

      {/* Footer */}

      <p className="text-center text-sm text-gray-500">
        © 2026 BPDPKS
      </p>

    </form>
  );
}
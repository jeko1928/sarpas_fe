import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function LoginCard() {
  return (
    <div
      className="
        w-full
        max-w-5xl
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-2xl
        grid
        lg:grid-cols-[420px_1fr]
      "
    >
      {/* ======================================== */}
      {/* Left Panel */}
      {/* ======================================== */}

      <div className="relative overflow-hidden bg-gradient-to-br from-[#0d6b70] via-[#138b72] to-[#22a06b]">

        {/* Background Decoration */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex h-full flex-col items-center justify-center px-10 py-14 text-white">

          {/* Logo */}
          <div className="rounded-full bg-white/10 p-5 backdrop-blur-sm">

            <Image
              src="/bpdplogo.png"
              alt="BPDP"
              width={130}
              height={130}
              priority
            />

          </div>

          {/* Title */}
          <h2 className="mt-8 text-center text-3xl font-bold">
            Selamat Datang
          </h2>

          <p className="mt-3 text-center text-lg text-emerald-50">
            di Aplikasi SARPRAS
          </p>

          <p className="mt-6 text-center text-sm leading-7 text-emerald-100">
            Sistem Informasi Sarana dan Prasarana
            <br />
            BPDP
          </p>

          {/* Back */}
          <Link
            href="/"
            className="
              mt-12
              rounded-xl
              border
              border-white/30
              px-6
              py-3
              font-medium
              transition
              hover:bg-white
              hover:text-[#0d6b70]
            "
          >
            ← Kembali
          </Link>

        </div>

      </div>

      {/* ======================================== */}
      {/* Right Panel */}
      {/* ======================================== */}

      <div className="bg-slate-50">

        <div className="flex h-full items-center justify-center p-8 lg:p-14">

          <div className="w-full max-w-md">

            <div className="mb-8">

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Login
              </span>

              <h1 className="mt-4 text-3xl font-bold text-gray-800">
                Masuk Akun SARPRAS
              </h1>

              <p className="mt-2 text-gray-500">
                Silakan masuk menggunakan email dan kata sandi Anda.
              </p>

            </div>

            <LoginForm />

          </div>

        </div>

      </div>
    </div>
  );
}
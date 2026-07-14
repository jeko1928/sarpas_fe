import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function LoginCard() {
  return (
    <div className="w-full max-w-7xl overflow-hidden rounded-2xl bg-[#f8f4ea] shadow-2xl">
      <div className="grid min-h-[700px] lg:grid-cols-12">

        {/* Left */}
        <div className="col-span-5 flex flex-col items-center justify-center bg-[#007b78] px-10 py-16 text-white">

          <Image
            src="logobpdp-putih.png"
            alt="SARPRAS"
            width={140}
            height={140}
            priority
          />

          <h2 className="mt-10 text-center text-4xl font-semibold">
            Selamat Datang Kembali
          </h2>

          <h3 className="mt-2 text-center text-3xl">
            di Aplikasi SARPRAS
          </h3>

          <Link
            href="/"
            className="mt-16 rounded-full bg-black py-3 font-semibold text-[#007b78] transition hover:bg-black-100"
          >
            ← Kembali
          </Link>
        </div>

        {/* Right */}
        <div className="col-span-7 flex items-center justify-center px-8 py-16">

          <div className="w-full max-w-md">

            <h1 className="text-center text-3xl font-semibold text-gray-800">
              Masuk Akun SARPRAS
            </h1>

            <p className="mt-3 text-center text-gray-500">
              Silahkan masuk sesuai dengan email dan kata sandi Anda
            </p>

            <div className="mt-10">
              <LoginForm />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
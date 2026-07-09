import Image from "next/image";
import Link from "next/link";

export default function HeroCard() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-home.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="max-w-5xl text-center text-white">

          {/* Logo */}
          <div className="mb-8 flex justify-center">

            <div className="rounded-full bg-white/10 p-6 backdrop-blur-md">

              <Image
                src="/bpdplogo.png"
                alt="BPDP"
                width={110}
                height={110}
              />

            </div>

          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">

            Selamat Datang di

            <span className="block text-emerald-400">
              Aplikasi SARPRAS
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">

            SARPRAS merupakan Sistem Informasi Sarana dan Prasarana
            untuk membantu meningkatkan produksi, produktivitas,
            serta nilai tambah dalam pengelolaan kebun kelapa sawit.

          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300">

            Daftarkan kelembagaan atau kelompok tani Anda
            melalui sistem ini untuk mempermudah proses
            pengajuan bantuan dan fasilitas dari pemerintah
            dalam pengembangan kelembagaan pekebun.

          </p>

          {/* Button */}
          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/registration"
              className="
                rounded-xl
                bg-emerald-600
                px-10
                py-4
                text-lg
                font-semibold
                shadow-xl
                transition
                hover:bg-emerald-700
                hover:scale-105
              "
            >
              Pendaftaran
            </Link>

            <Link
              href="/panduan"
              className="
                rounded-xl
                border
                border-white/40
                bg-white/10
                px-10
                py-4
                text-lg
                font-semibold
                backdrop-blur-md
                transition
                hover:bg-white
                hover:text-gray-900
              "
            >
              Panduan
            </Link>

          </div>

          {/* Bottom Info */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

              <h3 className="text-3xl font-bold text-emerald-400">
                100%
              </h3>

              <p className="mt-2 text-sm text-gray-200">
                Pendaftaran dilakukan secara online.
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

              <h3 className="text-3xl font-bold text-emerald-400">
                Cepat
              </h3>

              <p className="mt-2 text-sm text-gray-200">
                Proses registrasi lebih mudah dan efisien.
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

              <h3 className="text-3xl font-bold text-emerald-400">
                Aman
              </h3>

              <p className="mt-2 text-sm text-gray-200">
                Data kelembagaan tersimpan dengan aman.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
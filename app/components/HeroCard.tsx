import Image from "next/image";
import Link from "next/link";

export default function HeroCard() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-home.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/">
            <Image
              src="/images/logo-putih.png"
              alt="SARPRAS"
              width={180}
              height={55}
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 text-white lg:flex">
            <Link href="/" className="hover:text-green-300">
              Beranda
            </Link>

            <Link href="/regulasi" className="hover:text-green-300">
              Regulasi
            </Link>

            <Link href="/panduan" className="hover:text-green-300">
              Panduan
            </Link>

            <Link href="/faq" className="hover:text-green-300">
              FAQ
            </Link>

            <Link href="/kontak" className="hover:text-green-300">
              Kontak
            </Link>

            <Link href="/login" className="hover:text-green-300">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center text-white">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-3.svg"
              alt="Logo"
              width={120}
              height={120}
            />
          </div>

          {/* Box */}
          <div className="mx-auto max-w-4xl bg-black/60 px-10 py-8">

            <h1 className="text-4xl font-bold uppercase md:text-5xl">
              Selamat Datang di Aplikasi <b>SARPRAS</b>
            </h1>

            <p className="mt-6 text-lg leading-8">
              SARPRAS adalah Aplikasi Sarana dan Prasarana untuk membantu
              meningkatkan produksi dan produktivitas atau nilai tambah dalam
              pengelolaan Kebun Kelapa Sawit.
            </p>

            <p className="mt-6 text-lg leading-8">
              Daftarkan kelembagaan/kelompok tani Anda melalui tombol di bawah
              ini untuk mempermudah mendapatkan fasilitas dari pemerintah guna
              mengembangkan kelembagaan/kelompok tani Anda.
            </p>

          </div>

          {/* Button */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/pendaftaran"
              className="rounded-md bg-blue-600 px-10 py-4 text-2xl font-bold uppercase transition hover:bg-blue-700"
            >
              Pendaftaran
            </Link>

            <Link
              href="/panduan"
              className="rounded-md bg-orange-500 px-10 py-4 text-2xl font-bold uppercase transition hover:bg-orange-600"
            >
              Panduan
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
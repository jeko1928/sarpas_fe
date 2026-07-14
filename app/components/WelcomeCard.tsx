import Link from "next/link";

export default function WelcomeCard() {
  return (
    <div
      className="
        w-full
        max-w-3xl
        rounded-lg
        bg-black/60
        px-8
        py-10
        text-center
        shadow-2xl
        backdrop-blur-md
        md:px-16
      "
    >
      <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
        SELAMAT DATANG
        <br />
        DI APLIKASI SARPRAS
      </h1>

      <p className="mt-8 text-base leading-8 text-white md:text-lg">
        SARPRAS adalah Aplikasi Sarana dan Prasarana untuk membantu
        meningkatkan produksi, produktivitas dan nilai tambah
        pengelolaan Kebun Kelapa Sawit.
      </p>

      <p className="mt-6 text-base text-white md:text-lg">
        Daftarkan kelembagaan / kelompok tani Anda
      </p>

      <p className="text-base text-white md:text-lg">
        melalui tombol di bawah ini.
      </p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/daftar"
          className="
            rounded-md
            bg-blue-600
            px-8
            py-3
            text-lg
            font-bold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          PENDAFTARAN
        </Link>

        <Link
          href="/panduan"
          className="
            rounded-md
            bg-orange-500
            px-8
            py-3
            text-lg
            font-bold
            text-white
            transition
            hover:bg-orange-600
          "
        >
          PANDUAN
        </Link>
      </div>
    </div>
  );
}
import Header from "../components/Header";
import ProfileSection from "../components/ProfilSection";
import BankSection from "../components/BankSection";
import CooperativeSection from "../components/CooperativeSection";

export default function Registration() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
      <Header />

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        {/* Judul Halaman */}
        <div className="mb-8">

          <div className="flex items-center gap-3">

            <div className="h-12 w-2 rounded-full bg-emerald-600" />

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                Pendaftaran Kelembagaan Pekebun
              </h1>

              <p className="mt-1 text-gray-500">
                Lengkapi seluruh data pendaftaran kelembagaan.
              </p>

            </div>

          </div>

        </div>

        {/* Informasi */}
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">

          <div className="flex items-start gap-3">

            <div className="mt-1 text-xl">⚠️</div>

            <div>

              <h3 className="font-semibold text-amber-800">
                Informasi
              </h3>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-700">
                <li>Kolom bertanda (*) wajib diisi.</li>
                <li>Pastikan email yang digunakan masih aktif.</li>
                <li>Ukuran maksimal dokumen adalah 10 MB.</li>
                <li>Gunakan data sesuai dokumen resmi.</li>
              </ul>

            </div>

          </div>

        </div>

        {/* Form */}
        <div className="space-y-8">

          <ProfileSection />

          <BankSection />

          <CooperativeSection />

        </div>

        {/* Footer Button */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex justify-end gap-4">

            <button
              className="
                rounded-xl
                border
                border-gray-300
                px-8
                py-3
                font-medium
                transition
                hover:bg-gray-100
              "
            >
              Reset
            </button>

            <button
              className="
                rounded-xl
                bg-emerald-600
                px-10
                py-3
                font-medium
                text-white
                shadow-md
                transition
                hover:bg-emerald-700
              "
            >
              Daftar Sekarang
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
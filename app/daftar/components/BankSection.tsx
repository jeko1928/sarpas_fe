import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

export default function BankSection() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
            <span className="text-xl">🏦</span>
          </div>

          <div>

            <h2 className="text-xl font-semibold text-gray-800">
              Data Bank Operasional
            </h2>

            <p className="text-sm text-gray-500">
              Informasi rekening bank yang digunakan untuk operasional lembaga.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}
      <div className="space-y-8 p-8">

        {/* Informasi Rekening */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Informasi Rekening
          </h3>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            <FormInput
              label="Nama Pemilik Rekening"
              required
              placeholder="Masukkan nama sesuai buku tabungan"
            />

            <FormInput
              label="Nomor Rekening"
              required
              placeholder="Masukkan nomor rekening"
            />

            <FormSelect
              label="Nama Bank"
              required
              options={[
                "Bank BRI",
                "Bank BNI",
                "Bank Mandiri",
                "Bank BTN",
                "Bank Syariah Indonesia",
                "Bank BCA",
                "Bank CIMB Niaga",
                "Bank Lainnya",
              ]}
            />

            <FormInput
              label="Cabang Bank"
              required
              placeholder="Contoh: Bandung Utama"
            />

          </div>

        </div>

        {/* Informasi */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">

          <h4 className="font-semibold text-sky-700">
            Informasi
          </h4>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">

            <li>
              • Gunakan rekening yang masih aktif.
            </li>

            <li>
              • Nama pemilik rekening harus sesuai dengan dokumen pendukung.
            </li>

            <li>
              • Pastikan nomor rekening sudah benar sebelum melanjutkan.
            </li>

            <li>
              • Rekening akan digunakan pada proses pencairan bantuan.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}
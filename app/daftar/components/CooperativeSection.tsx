import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

export default function CooperativeSection() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
            <span className="text-xl">🏢</span>
          </div>

          <div>

            <h2 className="text-xl font-semibold text-gray-800">
              Data Kelembagaan
            </h2>

            <p className="text-sm text-gray-500">
              Informasi legalitas dan data kelembagaan pekebun.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}
      <div className="space-y-10 p-8">

        {/* =============================== */}
        {/* Legalitas */}
        {/* =============================== */}

        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Legalitas
          </h3>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">

            <FormInput
              label="Nomor Legalitas"
              required
              placeholder="Masukkan nomor legalitas"
            />

            <FormInput
              label="Tanggal Terbit"
              required
              type="date"
            />

            <FormInput
              label="Pejabat Penetapan"
              required
              placeholder="Nama pejabat"
            />

            <FormInput
              label="Notaris"
              placeholder="Nama notaris"
            />

          </div>

        </div>

        {/* =============================== */}
        {/* Perubahan Legalitas */}
        {/* =============================== */}

        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Perubahan Legalitas
          </h3>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">

            <FormSelect
              label="Ada Perubahan?"
              required
              options={[
                "Tidak",
                "Ya",
              ]}
            />

            <FormInput
              label="Nomor Legalitas Baru"
              placeholder="Nomor legalitas perubahan"
            />

            <FormInput
              label="Tanggal Perubahan"
              type="date"
            />

            <FormInput
              label="Pejabat Penetapan Baru"
              placeholder="Nama pejabat"
            />

          </div>

        </div>

        {/* =============================== */}
        {/* Data Kelembagaan */}
        {/* =============================== */}

        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Informasi Kelembagaan
          </h3>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">

            <FormInput
              label="Perusahaan Mitra"
              placeholder="Nama perusahaan"
            />

            <FormInput
              label="Jumlah Poktan"
              type="number"
              placeholder="0"
            />

            <FormInput
              label="Jumlah Anggota"
              type="number"
              placeholder="0"
            />

            <FormInput
              label="Luas Lahan (Ha)"
              type="number"
              placeholder="0"
            />

          </div>

        </div>

        {/* =============================== */}
        {/* Keterangan */}
        {/* =============================== */}

        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Keterangan Tambahan
          </h3>

          <textarea
            rows={4}
            placeholder="Masukkan keterangan apabila diperlukan..."
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-100
            "
          />

        </div>

        {/* =============================== */}
        {/* Informasi */}
        {/* =============================== */}

        <div className="rounded-xl border border-violet-200 bg-violet-50 p-5">

          <h4 className="font-semibold text-violet-700">
            Informasi
          </h4>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">

            <li>
              • Nomor legalitas harus sesuai dokumen resmi.
            </li>

            <li>
              • Isi data perubahan apabila terdapat perubahan SK atau Akta.
            </li>

            <li>
              • Jumlah anggota dan kelompok tani harus sesuai kondisi saat ini.
            </li>

            <li>
              • Pastikan seluruh data telah diperiksa sebelum menekan tombol daftar.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}
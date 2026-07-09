import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

export default function ProfileSection() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-5">
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
            <span className="text-xl">🏢</span>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Profile Lembaga
            </h2>

            <p className="text-sm text-gray-500">
              Lengkapi informasi dasar kelembagaan pekebun.
            </p>
          </div>

        </div>
      </div>

      {/* Body */}
      <div className="space-y-8 p-8">

        {/* Informasi Dasar */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Informasi Dasar
          </h3>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">

            <FormInput
              label="Nama Kelembagaan"
              required
              placeholder="Masukkan nama kelembagaan"
            />

            <FormInput
              label="Email Lembaga"
              type="email"
              required
              placeholder="email@contoh.com"
            />

            <FormInput
              label="Nama Ketua"
              required
              placeholder="Nama Ketua Pengurus"
            />

            <FormInput
              label="Telepon"
              required
              placeholder="021xxxxxxx"
            />

            <FormInput
              label="Handphone"
              required
              placeholder="08xxxxxxxxxx"
            />

            <FormSelect
              label="Jenis Lembaga"
              required
              options={[
                "Kelompok Tani",
                "Gabungan Kelompok Tani",
                "Koperasi",
                "Lainnya",
              ]}
            />

          </div>

        </div>

        {/* Alamat */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Alamat
          </h3>

          <div className="space-y-6">

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Alamat
                <span className="ml-1 text-red-500">*</span>
              </label>

              <textarea
                rows={4}
                placeholder="Masukkan alamat lengkap..."
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

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">

              <FormSelect
                label="Provinsi"
                required
                options={[]}
              />

              <FormSelect
                label="Kabupaten"
                required
                options={[]}
              />

              <FormSelect
                label="Kecamatan"
                required
                options={[]}
              />

              <FormSelect
                label="Kelurahan / Desa"
                required
                options={[]}
              />

              <FormInput
                label="Kode Pos"
                required
                placeholder="40111"
              />

              <FormInput
                label="Petugas Input"
                required
                placeholder="Nama Petugas"
              />

              <FormInput
                label="HP Petugas"
                required
                placeholder="08xxxxxxxxxx"
              />

            </div>

          </div>

        </div>

        {/* Dokumen */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Dokumen Pendukung
          </h3>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Upload */}
            <div className="space-y-6">

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Legalitas
                </label>

                <input
                  type="file"
                  className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-dashed
                    border-gray-300
                    p-4
                    text-sm
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Dasar Penunjukan Ketua
                </label>

                <input
                  type="file"
                  className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-dashed
                    border-gray-300
                    p-4
                    text-sm
                  "
                />

              </div>

            </div>

            {/* Informasi */}
            <div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">

                <h4 className="font-semibold text-blue-700">
                  Ketentuan Upload
                </h4>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">

                  <li>
                    • Kelompok Tani / Gapoktan → Surat Registrasi
                  </li>

                  <li>
                    • Koperasi → SK Pengesahan Koperasi
                  </li>

                  <li>
                    • Lembaga Lain → Dokumen Pengesahan
                  </li>

                  <li>
                    • Maksimal ukuran file 10 MB
                  </li>

                  <li>
                    • Format PDF/JPG/PNG
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export default function RegistrationForm() {
  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-sm">

      {/* Header Form */}
      <div className="border-b border-gray-300 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Profile Lembaga
        </h2>
        <p className="text-sm text-red-500 mt-1">
          * Wajib diisi
        </p>
      </div>

      <div className="p-6 space-y-5">

        {/* Baris 1 */}
        <div className="grid grid-cols-4 gap-5">
          <FormInput label="Nama Kelembagaan Pekebun" required />
          <FormInput label="Email Lembaga" required type="email" />
          <FormInput label="Nama Ketua Pengurus" required />
          <FormInput label="Telepon" required />
        </div>

        {/* Baris 2 */}
        <div className="grid grid-cols-4 gap-5">

          <FormInput label="Handphone" required />

          <div className="col-span-3">
            <label className="block text-sm font-medium mb-2">
              Alamat <span className="text-red-500">*</span>
            </label>

            <textarea
              rows={2}
              className="
                w-full
                border
                border-gray-300
                rounded
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
              "
            />
          </div>

        </div>

        {/* Baris 3 */}
        <div className="grid grid-cols-4 gap-5">
          <FormSelect label="Provinsi" required options={[]} />
          <FormSelect label="Kabupaten" required options={[]} />
          <FormSelect label="Kecamatan" required options={[]} />
          <FormSelect label="Kelurahan / Desa" required options={[]} />
        </div>

        {/* Baris 4 */}
        <div className="grid grid-cols-4 gap-5">
          <FormInput label="Kode Pos" required />
          <FormInput label="Petugas Input" required />
          <FormInput label="Handphone Aktif Petugas Input" required />
          <div />
        </div>

        {/* Upload */}
        <div className="grid grid-cols-2 gap-8 pt-6">

          {/* Kiri */}
          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Legalitas (Akta Pendirian/Perubahan)
              </label>

              <input
                type="file"
                className="block w-full text-sm border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Dasar Penunjukan Ketua (RAT/SK)
              </label>

              <input
                type="file"
                className="block w-full text-sm border rounded p-2"
              />
            </div>

          </div>

          {/* Kanan */}
          <div>

            <p className="text-sm text-blue-600 leading-7">
              Dokumen yang diupload berdasarkan jenis kelembagaan:
              <br />
              1. Kelompok Tani dan Gapoktan → Surat Registrasi.
              <br />
              2. Koperasi → SK Pengesahan Koperasi.
              <br />
              3. Kelembagaan Pekebun Lainnya → Izin/Pengesahan.
            </p>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Jenis Lembaga
              </label>

              <select className="w-full border rounded h-11 px-3">
                <option>Kelompok Tani / Gabungan Kelompok Tani</option>
              </select>
            </div>

          </div>

        </div>

        {/* Tombol */}
        <div className="flex justify-end gap-3 pt-8">

          <button
            className="
              px-6
              py-2
              bg-gray-500
              text-white
              rounded
              hover:bg-gray-600
            "
          >
            Reset
          </button>

          <button
            className="
              px-6
              py-2
              bg-[#2c9a72]
              text-white
              rounded
              hover:bg-[#23805f]
            "
          >
            Daftar
          </button>

        </div>

      </div>

    </div>
  );
}
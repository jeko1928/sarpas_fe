export default function LoginForm() {
  return (
    <>

      <h2 className="text-3xl font-semibold text-center">
        Masuk Akun SARPRAS
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Silahkan masuk sesuai dengan email dan kata sandi anda
      </p>

      <div className="mt-10">

        <label className="block text-sm font-medium mb-2">
          Alamat Email
        </label>

        <input
          type="email"
          placeholder="Alamat Email Terdaftar"
          className="w-full h-11 border rounded px-3"
        />

      </div>

      <div className="mt-6">

        <label className="block text-sm font-medium mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Password"
          className="w-full h-11 border rounded px-3"
        />

      </div>

      <div className="flex justify-center gap-4 mt-10">

        <button
          className="
            bg-red-500
            text-white
            px-6
            py-2
            rounded-full
          "
        >
          Lupa Password
        </button>

        <button
          className="
            bg-green-600
            text-white
            px-8
            py-2
            rounded-full
          "
        >
          Masuk
        </button>

      </div>

    </>
  );
}
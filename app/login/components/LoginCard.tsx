import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="w-[950px] bg-white shadow-lg flex">

      {/* kiri */}

      <div className="w-[360px] bg-[#49a36f] text-white flex flex-col items-center justify-center py-16">

        <Image
          src="/bpdplogo.png"
          alt="Logo"
          width={180}
          height={180}
        />

        <h2 className="mt-8 text-3xl font-semibold text-center">
          Selamat Datang Kembali
        </h2>

        <p className="text-xl mt-2">
          di Aplikasi SARPRAS
        </p>

        <button className="mt-12 text-white underline">
          &lt;&lt; Kembali
        </button>

      </div>

      {/* kanan */}

      <div className="flex-1 p-12">

        <LoginForm />

      </div>

    </div>
  );
}
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">

      <div className="grid grid-cols-[260px_1fr_110px]">

        {/* kiri */}
        <div className="bg-[#0d6b70] flex items-center px-8 h-[120px]">

          <h1 className="text-white text-4xl font-bold">
            Pendaftaran
          </h1>

        </div>

        {/* tengah */}
        <div className="flex flex-col justify-center px-10">

          <h2 className="text-[24px] font-semibold text-gray-800">
            
          </h2>

          <p className="text-[18px] mt-2 text-gray-700">
            
          </p>

        </div>

        {/* kanan */}
        <div className="flex justify-center items-center">

          <Image
            src="/bpdplogo.png"
            width={80}
            height={80}
            alt="Logo"
          />

        </div>

      </div>

    </header>
  );
}
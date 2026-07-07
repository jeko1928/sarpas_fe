import Image from "next/image";

export default function LoginHeader() {
  return (
    <header className="bg-white">
      <div className="grid grid-cols-[220px_1fr_110px] h-[120px]">

        {/* Kiri */}
        <div className="bg-[#0d6b70] flex items-center px-6">
          <h1 className="text-white text-3xl font-bold">
            Login
          </h1>
        </div>

        {/* Tengah */}
        <div className="flex flex-col justify-center px-8">
          <h2 className="text-[22px] font-semibold text-gray-800 leading-tight">
            
          </h2>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/bpdplogo.png"
            alt="Logo BPDP"
            width={80}
            height={80}
          />
        </div>

      </div>
    </header>
  );
}
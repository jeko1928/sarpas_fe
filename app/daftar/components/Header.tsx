import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex flex-col justify-center px-10">

        {/* Kiri */}
        <div className="ml-4">
          <Image
            src="/bpdplogo.png"
            width={70}
            height={50}
            alt="Logo"
          />
            Pendaftaran Kelembagaan Pekebun

        </div>

        

      </div>
    </header>
  );
}
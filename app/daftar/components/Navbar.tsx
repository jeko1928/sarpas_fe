import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#33996e]">
      <div className="container mx-auto">
        <div className="flex justify-end items-center h-[38px] text-white text-sm">

          <Link href="/" className="mr-6 hover:underline">
            Beranda
          </Link>

          <Link href="#" className="mr-6 hover:underline">
            Regulasi
          </Link>

          <Link href="/panduan" className="mr-6 hover:underline">
            Panduan
          </Link>

          <Link href="#" className="mr-6 hover:underline">
            FAQ
          </Link>

          <Link href="#" className="mr-6 hover:underline">
            Kontak
          </Link>

          <Link href="/login" className="hover:underline">
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}
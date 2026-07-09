import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#33996e]">
      <div className="container mx-auto">
        <div className="flex justify-end items-center h-[38px] text-white text-sm">

          <Link href="/"  style={{ marginRight: "30px", color: "white" }}>
            Beranda
          </Link>

          <Link href="#"  style={{ marginRight: "30px", color: "white" }}>
            Regulasi
          </Link>

          <Link href="/panduan"  style={{ marginRight: "30px", color: "white" }}>
            Panduan
          </Link>

          <Link href="#"  style={{ marginRight: "30px", color: "white" }}>
            FAQ
          </Link>

          <Link href="#"  style={{ marginRight: "30px", color: "white" }}>
            Kontak
          </Link>

          <Link href="/login"  style={{ color: "white" }}>
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "60px",
          paddingRight: "40px",
        }}
      >
        <Link href="/" style={{ marginRight: "30px", color: "white" }}>
          Beranda
        </Link>

        <Link href="/" style={{ marginRight: "30px", color: "white" }}>
          Regulasi
        </Link>

        <Link href="/panduan" style={{ marginRight: "30px", color: "white" }}>
          Panduan
        </Link>

        <Link href="/faq" style={{ marginRight: "30px", color: "white" }}>
          FAQ
        </Link>

        <Link href="/kontak" style={{ marginRight: "30px", color: "white" }}>
          Kontak
        </Link>

        <Link href="/login" style={{ color: "white" }}>
          Login
        </Link>
      </div>
    </header>
  );
}
import Link from "next/link";

export default function Header() {
  return (
<header className="absolute top-0 left-5000 w-full z-50">
  <div className="max-w-[1400px] mx-auto h-[60px] flex items-center justify-end px-16">

       <nav className="absolute top-[8px] right-[25px] flex gap-[16px] text-[16px] text-white">

<Link href="/">Beranda</Link>

<Link href="/">Regulasi</Link>

<Link href="/">Panduan</Link>

<Link href="/">Faq</Link>

<Link href="/">Kontak</Link>

<Link href="/">Login</Link>

</nav>

  </div>
</header>
  );
}
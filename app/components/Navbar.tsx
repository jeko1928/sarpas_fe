import Link from "next/link";

export default function Navbar() {
  return (

<header className="absolute top-0 left-0 w-full z-50">

<div className="container mx-auto">

<nav className="flex justify-end py-10 gap-2 text-blue text-sm">

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
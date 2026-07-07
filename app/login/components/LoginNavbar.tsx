import Link from "next/link";

const menus = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Regulasi",
    href: "#",
  },
  {
    title: "Panduan",
    href: "/panduan",
  },
  {
    title: "FAQ",
    href: "#",
  },
  {
    title: "Kontak",
    href: "#",
  },
];

export default function LoginNavbar() {
  return (
    <nav className="bg-[#32996c] h-10">
      <div className="w-full h-full flex justify-end items-center px-10">

        <div className="flex items-center gap-6 text-white text-sm">

          {menus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              className="hover:underline"
            >
              {menu.title}
            </Link>
          ))}

          <Link
            href="/login"
            className="font-semibold underline"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  ClipboardList,
  Factory,
  BookOpen,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile Lembaga",
    href: "/dashboard/profile",
    icon: Building2,
  },
  {
    title: "Pekebun",
    href: "/dashboard/pekebun",
    icon: Users,
  },
  {
    title: "Proposal",
    href: "/dashboard/proposal",
    icon: FileText,
  },
  {
    title: "Permohonan",
    href: "/dashboard/permohonan",
    icon: ClipboardList,
  },
  {
    title: "PKS",
    href: "/dashboard/pks",
    icon: Factory,
  },
  {
    title: "Panduan",
    href: "/dashboard/panduan",
    icon: BookOpen,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-gray-200 bg-white shadow-lg">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d6b70] to-[#1e9d73] p-6">

        <div className="flex items-center gap-4">

          <Image
            src="/bpdplogo.png"
            alt="BPDP"
            width={55}
            height={55}
          />

          <div>
            <h2 className="text-xl font-bold text-white">
              SARPRAS
            </h2>

            <p className="text-sm text-emerald-100">
              BPDP
            </p>
          </div>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-5">

        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (
            <Link
              key={menu.title}
              href={menu.href}
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition
                ${
                  active
                    ? "bg-emerald-600 text-white shadow"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                }
              `}
            >
              <Icon size={19} />

              {menu.title}
            </Link>
          );
        })}]]]]]]]]]]]]]

      </nav>

      {/* Footer */}
      <div className="border-t bg-gray-50 p-5">

        <p className="text-xs text-gray-400">
          SARPRAS v1.0
        </p>

      </div>

    </aside>
  );
}
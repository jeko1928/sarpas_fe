"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronRight, 
  LayoutDashboard, 
  Building2, 
  Users, 
  FileText, 
  ClipboardList, 
  FileCheck, 
  BookOpen,
  LogOut
} from "lucide-react";

const menu = [
  { 
    title: "Dashboard", 
    href: "/dashboard",
    icon: LayoutDashboard 
  },
  { 
    title: "Profile Lembaga", 
    href: "/profile-lembaga",
    icon: Building2 
  },
  { 
    title: "Pekebun", 
    href: "/pekebun",
    icon: Users 
  },
  { 
    title: "Proposal", 
    href: "/proposal",
    icon: FileText 
  },
  { 
    title: "Permohonan", 
    href: "/permohonan", 
    children: true,
    icon: ClipboardList 
  },
  { 
    title: "PKS", 
    href: "/pks",
    icon: FileCheck 
  },
  { 
    title: "Panduan", 
    href: "/panduan", 
    children: true,
    icon: BookOpen 
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header - Brand */}
      <div className="bg-[#0d6b70] p-6 h-[200px] flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            SARPRAS
          </h1>
          <p className="text-white/60 text-xs mt-0.5">v2.0.1</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/10 rounded-xl p-2.5">
            <Image
              src="/logobpdp-putih.png"
              width={45}
              height={45}
              alt="Logo BPDP"
              className="brightness-0 invert"
            />
          </div>
          <div className="text-white text-sm leading-5">
            <span className="font-semibold">Badan Pengelola</span>
            <br />
            <span className="text-white/70 text-xs">Dana Perkebunan</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {menu.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-200 group
                  ${
                    active
                      ? "bg-[#0d6b70]/10 text-[#0d6b70] font-medium shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                <Icon 
                  size={20} 
                  className={`${
                    active ? "text-[#0d6b70]" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
                
                <span className="flex-1">
                  {item.title}
                </span>

                {item.children && (
                  <ChevronRight
                    size={16}
                    className={`${
                      active ? "text-[#0d6b70]" : "text-gray-400"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom - Logout */}
        <div className="border-t border-gray-200 mt-6 pt-4">
          <button
            onClick={() => {/* handle logout */}}
            className="flex items-center gap-3 w-full rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
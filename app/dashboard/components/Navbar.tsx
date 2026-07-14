"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, BookOpen, HelpCircle, Mail, LogIn } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export default function Navbar({ isLoggedIn = false }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/regulasi", label: "Regulasi", icon: FileText },
    { href: "/panduan", label: "Panduan", icon: BookOpen },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/kontak", label: "Kontak", icon: Mail },
  ];

  return (
    <nav className="bg-[#0d6b70] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-[46px] text-white text-sm gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 hover:text-white/80 transition-colors ${
                  isActive ? "font-semibold text-white" : "text-white/80"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
          
          {!isLoggedIn && (
            <Link 
              href="/login" 
              className="flex items-center gap-1.5 bg-white/20 px-4 py-1.5 rounded-lg hover:bg-white/30 transition-colors font-medium"
            >
              <LogIn size={16} />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
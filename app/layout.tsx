import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SARPRAS",
  description: "Sarana dan Prasarana Kelapa Sawit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
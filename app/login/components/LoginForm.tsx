"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // sementara langsung masuk dashboard
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Alamat Email
        </label>

        <input
          type="email"
          placeholder="Alamat Email Terdaftar"
          className="w-full rounded-md border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border p-3"
        />
      </div>

      <div className="flex justify-center gap-4 pt-4">

        <Link
          href="/forgot-password"
          className="rounded-full bg-red-500 px-6 py-3 text-white"
        >
          Lupa Password
        </Link>

        <button
          type="submit"
          className="rounded-full bg-[#007b78] px-8 py-3 text-white"
        >
          Masuk
        </button>

      </div>

    </form>
  );
}
import Link from "next/link";

export default function HeroCard() {
  return (

<div className="mt-12">

<div className="w-[700px] bg-black/55 text-center p-8">

<h1 className="text-white text-5xl font-bold">

SELAMAT DATANG DI APLIKASI SARPRAS

</h1>

<p className="text-white mt-5 leading-8">

SARPRAS adalah Aplikasi Sarana dan Prasarana
untuk membantu meningkatkan produksi
dan produktivitas ataupun nilai tambah
dalam pengelolaan Kebun Kelapa Sawit.

</p>

<p className="text-white mt-5">

Daftarkan kelembagaan/kelompok tani Anda

</p>

<p className="text-white">

melalui tombol dibawah ini.

</p>

<div className="flex justify-center gap-4 mt-10">

<Link
href="/daftar"
className="bg-[#4CAF50] text-white px-12 py-3 font-bold"
>
PENDAFTARAN
</Link>

<Link
href="/panduan"
className="bg-[#e57255] text-white px-12 py-3 font-bold"
>
PANDUAN
</Link>

</div>

</div>

</div>

  );
}
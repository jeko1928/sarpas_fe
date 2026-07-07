import Link from "next/link";

export default function WelcomeCard() {

  return (

<div
className="
w-[760px]
bg-black/55
backdrop-blur-sm
text-center
px-16
py-10
rounded
shadow-card
"
>

<h1
className="
text-white
text-[44px]
font-extrabold
leading-tight
"
>

SELAMAT DATANG

<br />

DI APLIKASI SARPRAS

</h1>

<p
className="
text-white
text-lg
leading-8
mt-8
"
>

SARPRAS adalah Aplikasi Sarana dan Prasarana

untuk membantu meningkatkan produksi,

produktivitas dan nilai tambah

pengelolaan Kebun Kelapa Sawit.

</p>

<p className="text-white mt-6 text-lg">

Daftarkan kelembagaan / kelompok tani Anda

</p>

<p className="text-white text-lg">

melalui tombol dibawah ini.

</p>

<div className="flex justify-center gap-6 mt-10">

<Link
href="/daftar"
className="btn-green rounded"
>

PENDAFTARAN

</Link>

<Link
href="/panduan"
className="btn-orange rounded"
>

PANDUAN

</Link>

</div>

</div>

  );

}
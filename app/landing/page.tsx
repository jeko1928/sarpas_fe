import Image from "next/image";

export default function Home(){

  return(

    <main className="relative w-full h-screen">

      <Image
        src="/sawit.jpg"
        alt="Sawit"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-white/40"/>

      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-10 py-5 text-white">

        <h1 className="text-2xl font-bold">
          BPDP
        </h1>

        <nav className="flex gap-8">
          <a href="">Beranda</a>
          <a href="">Regulasi</a>
          <a href="">Panduan</a>
          <a href="">FAQ</a>
          <a href="">Kontak</a>
          <a href="/dashboard">Login</a>
        </nav>

      </header>

      <section className="relative z-10 flex justify-center items-center h-full">

        <div className="bg-white/50 rounded-lg p-10 text-center text-white max-w-3xl">

          <h1 className="text-5xl font-bold">
            SELAMAT DATANG DI
            <br />
            SARPRAS
          </h1>

          <p className="mt-6">
            Aplikasi Sarana dan Prasarana
          </p>

        </div>

      </section>

    </main>

  )

}
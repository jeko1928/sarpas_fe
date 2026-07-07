import Logo from "./Logo";
import WelcomeCard from "./WelcomeCard";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/sawitt.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/25"></div>

      {/* Isi */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          pt-[140px]
        "
      >
        <Logo />

        <div className="mt-8">
          <WelcomeCard />
        </div>
      </div>
    </section>
  );
}
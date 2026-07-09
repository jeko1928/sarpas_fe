import Logo from "./Logo";
import WelcomeCard from "./WelcomeCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sawitt.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-5xl text-center">

          {/* Logo */}
          <div className="flex justify-center">
            <Logo />
          </div>

          {/* Welcome Card */}
          <div className="mt-10 flex justify-center">
            <WelcomeCard />
          </div>

        </div>

      </div>
    </section>
  );
}
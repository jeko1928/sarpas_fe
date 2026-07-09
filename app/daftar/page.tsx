import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";

export default function DaftarPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">

      <Navbar />



      <div className="w-full px-6 py-6">
        <RegistrationForm />
      </div>

    </main>
  );
}
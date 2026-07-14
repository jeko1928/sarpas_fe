import Navbar from "../components/Navbar";
import RegistrationForm from "./components/RegistrationForm";

export default function DaftarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container-custom py-8">
        <RegistrationForm />
      </div>
    </main>
  );
}
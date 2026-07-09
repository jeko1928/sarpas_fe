import LoginHeader from "./components/LoginHeader";
import LoginNavbar from "./components/LoginNavbar";
import LoginCard from "./components/LoginCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">



      <LoginNavbar />

      <div className="flex justify-center py-12">
        <LoginCard />
      </div>

    </main>
  );
}
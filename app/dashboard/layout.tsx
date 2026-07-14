import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[280px] shrink-0 border-r border-gray-200 bg-white shadow-sm">
        <Sidebar />
      </aside>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
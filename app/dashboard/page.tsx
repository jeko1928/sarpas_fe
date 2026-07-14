import Card from "./components/Card";
import DashboardBanner from "./components/DashboardBanner";
import { Users, LandPlot, FileText, TrendingUp, Calendar, Clock } from "lucide-react";

export default function Dashboard() {
  // Mock data - replace with real data later
  const stats = [
    {
      title: "Jumlah Anggota",
      value: "50",
      change: "+12%",
      icon: Users,
      color: "bg-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      title: "Total Lahan Pekebun Lembaga",
      value: "102.002 Ha",
      change: "+5.2%",
      icon: LandPlot,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Jumlah Proposal Diajukan",
      value: "48",
      change: "+8.4%",
      icon: FileText,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  const recentActivities = [
    { id: 1, title: "Proposal baru diajukan", time: "2 jam lalu", status: "pending" },
    { id: 2, title: "Pekebun baru terdaftar", time: "4 jam lalu", status: "completed" },
    { id: 3, title: "Permohonan PKS disetujui", time: "1 hari lalu", status: "approved" },
  ];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <DashboardBanner />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <Card
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            bgColor={stat.bgColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Aktivitas Terbaru</h3>
            <button className="text-sm text-[#0d6b70] hover:underline font-medium">
              Lihat Semua
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.status === "pending" ? "bg-yellow-100" :
                  activity.status === "completed" ? "bg-green-100" :
                  "bg-blue-100"
                }`}>
                  {activity.status === "pending" && <Clock size={18} className="text-yellow-600" />}
                  {activity.status === "completed" && <TrendingUp size={18} className="text-green-600" />}
                  {activity.status === "approved" && <Calendar size={18} className="text-blue-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activity.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                  activity.status === "completed" ? "bg-green-100 text-green-700" :
                  "bg-blue-100 text-blue-700"
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Aksi Cepat</h3>
          
          <div className="space-y-3">
            <button className="w-full bg-[#0d6b70] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#0a5559] transition-colors text-sm">
              + Proposal Baru
            </button>
            <button className="w-full bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg font-medium hover:bg-emerald-100 transition-colors text-sm">
              + Daftar Pekebun
            </button>
            <button className="w-full bg-orange-50 text-orange-700 px-4 py-3 rounded-lg font-medium hover:bg-orange-100 transition-colors text-sm">
              + Permohonan PKS
            </button>
            <button className="w-full bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors text-sm">
              Lihat Laporan
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-800">Butuh Bantuan?</p>
              <p className="text-xs text-blue-600 mt-1">Klik tombol ? di header untuk bantuan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0d6b70]/10 flex items-center justify-center">
            <TrendingUp size={20} className="text-[#0d6b70]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Dashboard SARPRAS</h2>
            <p className="text-sm text-gray-500">
              Selamat datang di aplikasi SARPRAS. Silakan pilih menu pada sidebar untuk mengakses fitur yang tersedia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
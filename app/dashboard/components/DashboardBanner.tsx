import { ChevronRight } from "lucide-react";

export default function DashboardBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d6b70] to-[#0a5559] p-8 shadow-sm">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>
      
      <div className="relative flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span>Dashboard</span>
            <ChevronRight size={14} />
            <span className="text-white">Overview</span>
          </div>
          
          <h1 className="mt-3 text-3xl font-bold text-white">
            Selamat Datang
          </h1>
          <p className="mt-1 text-white/80">
            Di Aplikasi SARPRAS - Sistem Informasi Sarana dan Prasarana
          </p>
          
          <div className="mt-4 flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white/90 text-xs">
              📊 Status: Aktif
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white/90 text-xs">
              🕐 {new Date().toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">2026</div>
              <div className="text-white/70 text-xs">Tahun Anggaran</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import DashboardLayout from "../dashboard/components/DashboardLayout";
import DashboardHero from "../dashboard/components/DashboardHero";
import DashboardStatCard from "../dashboard/components/DashboardStatCard";

import {
  Users,
  Trees,
  FileText,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Hero */}
        <DashboardHero />

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <DashboardStatCard
            title="Jumlah Anggota"
            value="22"
            color="emerald"
            icon={<Users className="w-8 h-8 text-white" />}
          />

          <DashboardStatCard
            title="Total Lahan"
            value="132.8 Ha"
            color="orange"
            icon={<Trees className="w-8 h-8 text-white" />}
          />

          <DashboardStatCard
            title="Jumlah Proposal Diajukan"
            value="3"
            color="red"
            icon={<FileText className="w-8 h-8 text-white" />}
          />
        </div>

      </div>
    </DashboardLayout>
  );
}]]]]]]
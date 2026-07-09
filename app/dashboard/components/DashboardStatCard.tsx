interface Props {
  title: string;
  value: string;
  color: "emerald" | "orange" | "red";
  icon?: React.ReactNode;
}

const colors = {
  emerald: "bg-emerald-500",
  orange: "bg-orange-500",
  red: "bg-red-600",
};

export default function DashboardStatCard({
  title,
  value,
  color,
  icon,
}: Props) {
  return (
    <div
      className={`${colors[color]} rounded-xl p-6 text-white shadow-lg`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white/90">{title}</p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>
        </div>

        <div>{icon}</div>
      </div>
    </div>
  );
}
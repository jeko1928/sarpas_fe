import { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
};

export default function Card({
  title,
  value,
  change,
  icon: Icon,
  bgColor,
  textColor,
}: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-gray-800">
            {value}
          </h3>
          {change && (
            <p className="mt-1 text-sm text-emerald-600 font-medium">
              {change} dari bulan lalu
            </p>
          )}
        </div>
        
        <div className={`${bgColor} p-3 rounded-xl`}>
          <Icon className={`w-6 h-6 ${textColor}`} />
        </div>
      </div>
    </div>
  );
}
interface FormSelectProps {
  label: string;
  required?: boolean;
  options: string[];
}

export default function FormSelect({
  label,
  required = false,
  options,
}: FormSelectProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <select
        className="
          h-11
          rounded
          border
          border-gray-300
          px-3
          text-sm
          outline-none
          focus:border-[#2c9a72]
        "
      >
        <option>Pilih</option>

        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
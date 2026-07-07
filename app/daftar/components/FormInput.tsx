interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

export default function FormInput({
  label,
  required = false,
  type = "text",
  placeholder = "",
}: FormInputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-11
          rounded
          border
          border-gray-300
          px-3
          text-sm
          outline-none
          focus:border-[#2c9a72]
          focus:ring-2
          focus:ring-[#2c9a72]/20
        "
      />
    </div>
  );
}
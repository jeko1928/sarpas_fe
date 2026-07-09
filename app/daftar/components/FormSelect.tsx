import React from "react";

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  error?: string;
  options: string[];
  placeholder?: string;
}

export default function FormSelect({
  label,
 required = false,
  error,
  options,
  placeholder = "-- Pilih --",
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {/* Select */}
      <div className="relative">
        <select
          {...props}
          defaultValue=""
          className={`
            w-full
            h-11
            rounded-xl
            border
            px-4
            pr-10
            text-sm
            text-gray-700
            bg-white
            appearance-none
            transition-all
            duration-200
            outline-none
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            }
            disabled:bg-gray-100
            disabled:text-gray-400
            disabled:cursor-not-allowed
            ${className}
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Icon panah */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Error */}
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
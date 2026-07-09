import React from "react";

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export default function FormInput({
  label,
  required = false,
  error,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        {...props}
        className={`
          w-full
          h-11
          rounded-xl
          border
          px-4
          text-sm
          text-gray-700
          bg-white
          transition-all
          duration-200
          outline-none
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          }
          disabled:bg-gray-100
          disabled:text-gray-400
          disabled:cursor-not-allowed
          placeholder:text-gray-400
          ${className}
        `}
      />

      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}
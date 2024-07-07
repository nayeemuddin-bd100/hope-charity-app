import { cn } from "@/lib/utils";
import React from "react";

type FormInputProps = {
  label: string;
  name: string;
  error?: string;
  type?: string;
  className?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  error,
  type,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-lg mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type || "text"}
        className={cn(
          "border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default FormInput;

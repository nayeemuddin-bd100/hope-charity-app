import { Controller, useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
}: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="mb-4">
          <label htmlFor={name} className="block text-gray-700 text-lg mb-2">
            {label}
          </label>
          <input
            required={required}
            {...field}
            type={type}
            id={name}
            className={`border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500 ${
              error ? "border-red-500" : "border-gray-200"
            }`}
            placeholder={placeholder}
          />
          {error && (
            <p className="text-red-500 text-xs italic">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;

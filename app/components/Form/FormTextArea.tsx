import { Controller, useFormContext } from "react-hook-form";

interface FormTextAreaProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormTextArea = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
}: FormTextAreaProps) => {
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
          <textarea
            required={required}
            {...field}
            disabled={disabled}
            id={name}
            onChange={(e) => {
              const value =
                type === "number" ? Number(e.target.value) : e.target.value;
              field.onChange(value);
            }}
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

export default FormTextArea;

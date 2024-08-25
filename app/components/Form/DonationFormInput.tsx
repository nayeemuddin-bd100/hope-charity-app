"use client";
import { Controller, useFormContext } from "react-hook-form";

interface DonationAmountInputProps {
  name: string;
  label: string;
  predefinedAmounts: number[];
}

const DonationAmountInput = ({
  name,
  label,
  predefinedAmounts,
}: DonationAmountInputProps) => {
  const { control, setValue, watch } = useFormContext();
  const currentAmount = watch(name);

  const handleAmountSelect = (amount: number) => {
    setValue(name, amount);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-5">{label}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`py-2 px-4 rounded-md ${
                  currentAmount === amount
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount}
              </button>
            ))}
            <input
              {...field}
              type="number"
              placeholder="Custom Amount"
              className="border rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => {
                const value = e.target.value ? parseInt(e.target.value) : null;
                field.onChange(value);
              }}
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs italic mt-2">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default DonationAmountInput;

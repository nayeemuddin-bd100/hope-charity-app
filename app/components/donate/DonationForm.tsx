"use client";

import FormWrapper from "@/app/components/Form/FormWrapper";
import { IDonor } from "@/app/types/donor";
import { donationFormSchema } from "@/app/validationSchema/donationZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";

interface IParams {
  donor: IDonor;
  causeId: string;
}

const DonationForm = ({ donor, causeId }: IParams) => {
  const [customAmount, setCustomAmount] = useState<number | null>(null);

  console.log(causeId);

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleDonationAmount = (amount: number | null) => {
    setCustomAmount(amount);
  };
  return (
    <div>
      <FormWrapper
        onSubmit={handleSubmit}
        resolver={zodResolver(donationFormSchema)}
        defaultValues={
          {
            // firstName: donor.name?.firstName || "",
            // lastName: donor.name?.lastName || "",
            // email: donor?.email || "",
            // address: donor?.address || "",
            // message: "",
            // donationAmount: null,
          }
        }
      >
        {/* Donation Amount */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-5">
            Select Donation Amount
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[10, 20, 50].map((amount) => (
              <button
                key={amount}
                type="button"
                className={`py-2 px-4 rounded-md ${
                  customAmount === amount
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleDonationAmount(amount)}
              >
                ${amount}
              </button>
            ))}
            <input
              type="number"
              placeholder="Custom Amount"
              className="border rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={customAmount !== null ? customAmount : ""}
              onChange={(e) =>
                handleDonationAmount(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-5">
          Enter Your Details
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FormInput
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            disabled
          />
          <FormInput
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            disabled
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FormInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            disabled
          />
          <FormInput
            name="address"
            label="Address"
            placeholder="Enter your Address"
          />
        </div>

        <FormTextArea
          name="message"
          label="Message"
          placeholder="Enter your message"
        />

        <div className="flex items-start justify-start mt-6">
          <button
            type="submit"
            className="bg-btn-gradient hover:bg-btn-gradient-hover text-white font-bold py-2 px-8 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </FormWrapper>
    </div>
  );
};

export default DonationForm;

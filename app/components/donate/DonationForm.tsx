"use client";

import FormWrapper from "@/app/components/Form/FormWrapper";
import submitDonation from "@/app/services/actions/submitDonation";
import { IDonor } from "@/app/types/donor";
import { donationFormSchema } from "@/app/validationSchema/donationZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import DonationAmountInput from "../Form/DonationFormInput";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";
import { Spinner } from "../shared/Spinner";

interface IParams {
  donor: IDonor;
  causeId: string;
}

const DonationForm = ({ donor, causeId }: IParams) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const donationData = {
      amount: Number(data?.donationAmount),
      cause: causeId,
    };
    try {
      setLoading(true);
      const res = await submitDonation({ ...donationData });

      if (!res.success) {
        toast.error(res?.errorMessages[0].message || res?.message);
      }

      if (res.success) {
        toast.success(res.message);
      }

      router.push(`/donate/success?amount=${donationData.amount}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <FormWrapper
        onSubmit={handleSubmit}
        resolver={zodResolver(donationFormSchema)}
        defaultValues={{
          firstName: donor.name?.firstName || "",
          lastName: donor.name?.lastName || "",
          email: donor?.email || "",
          address: donor?.address || "",
          message: "",
          donationAmount: Number(0),
        }}
      >
        <DonationAmountInput
          name="donationAmount"
          label="Select Donation Amount"
          predefinedAmounts={[10, 20, 50]}
        />

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
            {loading ? <Spinner className="w-4 h-4 mx-auto" /> : "Submit"}
          </button>
        </div>
      </FormWrapper>
    </div>
  );
};

export default DonationForm;

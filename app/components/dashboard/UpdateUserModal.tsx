"use client";
import updateDonor from "@/app/services/actions/updateDonor";
import { updateDonorZodSchema } from "@/app/validationSchema/donorZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import FormInput from "../Form/FormInput";
import FormWrapper from "../Form/FormWrapper";
import ImageUploader from "../Form/ImageUploader";
import CustomModal from "../shared/CustomModal";
import { Spinner } from "../shared/Spinner";

interface UpdateDonorModalProps {
  userData: any;
}

const UpdateDonorModal = ({ userData }: UpdateDonorModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUpdateUser: SubmitHandler<FieldValues> = async (payload) => {
    setIsLoading(true);
    try {
      const data = {
        id: userData._id,
        updatedData: {
          name: {
            firstName: payload.firstName,
            lastName: payload.lastName,
          },
          contactNo: payload.contactNo,
          address: payload.address,
          profileImage: payload.profileImage,
        },
      };
      const res = await updateDonor(data);
      console.log("🚀 ~ ~ res:", res);
      if (!res?.success) {
        toast.error(
          res?.errorMessages[0].message ||
            res?.message ||
            "Failed to update user information"
        );
      }
      if (res?.success) {
        toast.success("Donor information updated successfully!");
        setIsOpen(false);
        router.refresh();
      } else {
        toast.error(res?.message || "Failed to update user information");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating user information");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <FaEdit className="mr-2" /> Edit Information
        </button>
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit User Information"
      >
        <FormWrapper
          onSubmit={handleUpdateUser}
          resolver={zodResolver(updateDonorZodSchema)}
          defaultValues={{
            firstName: userData?.name?.firstName || "",
            lastName: userData?.name?.lastName || "",
            email: userData?.email || "",
            contactNo: userData?.contactNo || "",
            address: userData?.address || "",
            profileImage: userData?.profileImage || "",
          }}
        >
          <FormInput
            name="firstName"
            label="First Name"
            placeholder="Enter first name"
          />
          <FormInput
            name="lastName"
            label="Last Name"
            placeholder="Enter last name"
          />
          <FormInput
            name="email"
            label="Email"
            placeholder="Enter email"
            type="email"
            disabled
          />
          <FormInput
            name="contactNo"
            label="Contact Number"
            placeholder="Enter contact number"
          />
          <FormInput
            name="address"
            label="Address"
            placeholder="Enter address"
          />
          <ImageUploader
            name="profileImage"
            label="Profile Image"
            imageUrl={userData.profileImage}
          />
          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {isLoading ? <Spinner /> : "Update Information"}
            </button>
          </div>
        </FormWrapper>
      </CustomModal>
    </>
  );
};

export default UpdateDonorModal;

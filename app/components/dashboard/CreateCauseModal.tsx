"use client";
import { useCreateCauseMutation } from "@/app/redux/api/causeApi";
import { createCauseZodSchema } from "@/app/validationSchema/causeZodSchema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import FormInput from "../Form/FormInput";
import FormWrapper from "../Form/FormWrapper";
import ImageUploader from "../Form/ImageUploader";
import CustomModal from "../shared/CustomModal";
import { Spinner } from "../shared/Spinner";

type CreateCauseModalProps = {
  label?: string;
  className?: string;
};

const CreateCauseModal = ({
  label = "Create New Cause",
  className,
}: CreateCauseModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [createCause] = useCreateCauseMutation();

  const handleCreateCause: SubmitHandler<FieldValues> = async (payload) => {
    setIsLoading(true);
    try {
      const data = {
        title: payload?.title,
        description: payload?.description,
        goalAmount: Number(payload?.goalAmount),
        image: payload?.image,
      };
      const res = await createCause(data).unwrap();
      if (res?.success && res?.data?._id) {
        toast.success("Cause created successfully!");
      }
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create cause");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "bg-slate-800 hover:bg-slate-900 text-white  py-2 px-4 ",
          className
        )}
      >
        {label}
      </button>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create New Cause"
      >
        <FormWrapper
          onSubmit={handleCreateCause}
          resolver={zodResolver(createCauseZodSchema)}
          defaultValues={{
            title: "",
            description: "",
            goalAmount: 0,
            image: "",
          }}
        >
          <FormInput
            name="title"
            label="Title"
            placeholder="Enter cause title"
          />
          <FormInput
            name="description"
            label="Description"
            placeholder="Enter cause description"
          />
          <FormInput
            name="goalAmount"
            label="Goal Amount"
            type="number"
            placeholder="Enter goal amount"
          />
          <ImageUploader name="image" label="Cause Image" />
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isLoading ? <Spinner /> : "Create Cause"}
            </button>
          </div>
        </FormWrapper>
      </CustomModal>
    </>
  );
};

export default CreateCauseModal;

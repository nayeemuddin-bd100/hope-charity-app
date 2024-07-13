"use client";
import {
  useGetSingleCauseQuery,
  useUpdateCauseMutation,
} from "@/app/redux/api/causeApi";
import { updateCauseZodSchema } from "@/app/validationSchema/causeZodSchema";
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

type EditCauseModalProps = {
  causeId: string;
};

const EditCauseModal = ({ causeId }: EditCauseModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateCause] = useUpdateCauseMutation();
  const { data: causeData, isLoading: isFetchingCause } =
    useGetSingleCauseQuery(causeId, {
      skip: !isOpen, // Only fetch when the modal is open
    });

  const handleUpdateCause: SubmitHandler<FieldValues> = async (payload) => {
    setIsLoading(true);
    try {
      const data = {
        _id: causeId,
        updatedData: {
          title: payload?.title,
          description: payload?.description,
          image: payload?.image,
        },
      };
      const res = await updateCause(data).unwrap();
      if (res?.success) {
        toast.success("Cause updated successfully!");
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update cause");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "py-2 px-4 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        )}
      >
        Edit
      </button>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit Cause"
      >
        {isFetchingCause ? (
          <Spinner className="mx-auto h-6 w-6" />
        ) : causeData?.data?._id ? (
          <FormWrapper
            onSubmit={handleUpdateCause}
            resolver={zodResolver(updateCauseZodSchema)}
            defaultValues={{
              title: causeData?.data?.title || "",
              description: causeData?.data?.description || "",
              image: causeData?.data?.image || "",
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
            <ImageUploader
              name="image"
              label="Cause Image"
              imageUrl={causeData?.data?.image}
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {isLoading ? <Spinner /> : "Update Cause"}
              </button>
            </div>
          </FormWrapper>
        ) : null}
      </CustomModal>
    </>
  );
};

export default EditCauseModal;

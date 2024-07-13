"use client";
import { X } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ImageUploaderProps {
  name: string;
  label: string;
  imageUrl?: string;
}

const ImageUploader = ({ name, label, imageUrl }: ImageUploaderProps) => {
  const { control, watch, resetField } = useFormContext();
  const [preview, setPreview] = useState<string | null>(imageUrl || null);
  const [fileName, setFileName] = useState<string | null>(null);

  const imageFieldValue = watch(name);

  useEffect(() => {
    if (!imageFieldValue) {
      setPreview(null);
      setFileName(null);
      resetField(name);
    }
  }, [imageFieldValue, name, resetField]);

  const handleImageUpload = (
    result: any,
    onChange: (value: string) => void
  ) => {
    const imageUrl = result.info.secure_url;
    onChange(imageUrl);
    setPreview(imageUrl);
    setFileName(result.info.original_filename);
  };

  const handleRemoveImage = (onChange: (value: null) => void) => {
    onChange(null);
    setPreview(null);
    setFileName(null);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="mb-4">
          <label htmlFor={name} className="block text-gray-700 text-lg mb-2">
            {label}
          </label>
          <div className="relative">
            <CldUploadWidget
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
              options={{
                folder: "hope",
                multiple: false,
                maxImageWidth: 800,
                maxImageHeight: 800,
              }}
              onSuccess={(result: any) => handleImageUpload(result, onChange)}
              onError={(error: any) => {
                console.error("Cloudinary upload error:", error);
              }}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className={`flex items-center justify-between w-full py-4 px-3 border rounded cursor-pointer ${
                    error ? "border-red-500" : "border-gray-200"
                  } focus-within:outline-none focus-within:border-green-500`}
                >
                  <span className="text-gray-500 truncate">
                    {fileName || "Choose file"}
                  </span>
                  <span className="text-sm text-gray-500">
                    {fileName ? "" : "Browse"}
                  </span>
                </button>
              )}
            </CldUploadWidget>
            {fileName && (
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1"
                onClick={() => handleRemoveImage(onChange)}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {preview && (
            <div className="mt-2">
              <Image
                src={preview}
                width={200}
                height={200}
                alt="Preview"
                className="max-w-xs max-h-40 object-cover rounded"
              />
            </div>
          )}
          {error && (
            <p className="text-red-500 text-xs italic mt-1">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default ImageUploader;

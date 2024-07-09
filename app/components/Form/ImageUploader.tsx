import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ImageUploaderProps {
  name: string;
  label: string;
  required?: boolean;
}

const ImageUploader = ({
  name,
  label,
  required = false,
}: ImageUploaderProps) => {
  const { control } = useFormContext();
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const handleRemoveImage = (onChange: (value: null) => void) => {
    onChange(null);
    setPreview(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
            <input
              ref={fileInputRef}
              required={required}
              type="file"
              id={name}
              accept="image/*"
              onChange={(e) => handleImageChange(e, onChange)}
              className="sr-only"
            />
            <label
              htmlFor={name}
              className={`flex items-center justify-between w-full py-4 px-3 border rounded cursor-pointer ${
                error ? "border-red-500" : "border-gray-200"
              }  focus-within:outline-none focus-within:border-green-500`}
            >
              <span className="text-gray-500 truncate">
                {fileName || "Choose file"}
              </span>
              <span className="text-sm text-gray-500">
                {fileName ? "" : "Browse"}
              </span>
            </label>
            {fileName && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => handleRemoveImage(onChange)}
              >
                <X className="h-4 w-4" />
              </Button>
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

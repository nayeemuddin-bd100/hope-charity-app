import { z } from "zod";
export const updateDonorZodSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "First name must be less than 20 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Last name must be less than 20 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  contactNo: z
    .string()
    .min(1, "Contact number is required")
    .max(15, "Contact number must be less than 15 characters"),
  address: z.string().optional(),
  profileImage: z
    .string()
    .min(1, "Profile image is required")
    .url("Invalid image URL"),
});

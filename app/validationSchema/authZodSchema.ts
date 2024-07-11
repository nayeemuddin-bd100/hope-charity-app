import { z } from "zod";

export const registerZodSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name must be at most 30 characters")
      .regex(/^[A-Za-z]+$/, "First name can only contain letters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name must be at most 30 characters")
      .regex(/^[A-Za-z]+$/, "Last name can only contain letters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
    address: z
      .string()
      .min(1, "Address is required")
      .min(5, "Address must be at least 5 characters")
      .max(100, "Address must be at most 100 characters"),
    contactNo: z
      .string()
      .min(1, "Contact number is required")
      .max(20, "Please enter a valid contact number")
      .regex(/^[0-9+()\s-]+$/, "Please enter a valid contact number"),

    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// profileImage: z
//   .instanceof(File, { message: "Profile image is required" })
//   .refine((file) => file.size <= 1000000, `Max file size is 1MB.`)
//   .refine(
//     (file) => ["image/jpeg", "image/png"].includes(file.type),
//     "Only .jpg and .png formats are supported."
//   ),

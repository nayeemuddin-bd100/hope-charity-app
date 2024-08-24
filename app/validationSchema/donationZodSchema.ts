import z from "zod";
export const donationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  message: z.string().optional(),
  donationAmount: z.number().min(1, "Donation amount is required"),
});

import { z } from "zod";

export const createCauseZodSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(10, "Title must be at least 10 characters")
    .max(100, "Title must be at most 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(50, "Description must be at least 50 characters")
    .max(500, "Description must be at most 500 characters"),
  goalAmount: z
    .number()
    .positive("Goal amount must be a positive number")
    .min(20000, "Goal amount must be at least 20,000")
    .max(5000000, "Goal amount must be at most 50,00,000"),
  image: z
    .string()
    .min(1, "Profile image is required")
    .url("Invalid image URL"),
});

export const updateCauseZodSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title is required")
      .min(10, "Title must be at least 10 characters")
      .max(100, "Title must be at most 100 characters"),
    description: z
      .string()
      .min(1, "Description is required")
      .min(50, "Description must be at least 50 characters")
      .max(500, "Description must be at most 500 characters"),
    goalAmount: z
      .number()
      .positive("Goal amount must be a positive number")
      .min(20000, "Goal amount must be at least 20,000")
      .max(5000000, "Goal amount must be at most 50,00,000"),
    raisedAmount: z.number().optional(),
    image: z
      .string()
      .min(1, "Profile image is required")
      .url("Invalid image URL"),
  })
  .refine(
    (data) => {
      if (data.raisedAmount === undefined || data.goalAmount === undefined)
        return true;
      return data.raisedAmount <= data.goalAmount;
    },
    {
      message: "Goal amount cannot be less than raised amount",
      path: ["goalAmount"],
    }
  );

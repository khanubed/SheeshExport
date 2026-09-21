import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().min(2, "Company name is required").max(120),
  businessEmail: z.string().email("Valid business email is required"),
  phone: z.string().min(6, "Valid phone number with country code is required").max(25),
  country: z.string().min(2, "Destination country is required"),
  product: z.string().min(2, "Please select or specify a commodity / product"),
  grade: z.string().optional(),
  quantity: z.coerce.number().positive("Quantity must be greater than 0"),
  unit: z.enum(["MT", "KG", "Containers"], {
    message: "Please select a valid unit (MT, KG, or Containers)",
  }),
  packaging: z.string().min(2, "Packaging preference is required (e.g. 25kg PP, Jute, Vacuum)"),
  destinationPort: z.string().min(2, "Destination discharge port is required"),
  incoterm: z.enum(["FOB", "CIF", "CFR", "EXW"], {
    message: "Please select a valid Incoterm (FOB, CIF, CFR, EXW)",
  }),
  targetDeliveryDate: z.string().optional(),
  message: z.string().max(2000, "Additional notes must be under 2000 characters").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

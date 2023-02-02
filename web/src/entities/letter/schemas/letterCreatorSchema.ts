import { z } from "zod";

export const letterCreatorSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  cc: z.string(),
  bcc: z.string(),
  attachments: z.array(
    z.object({
      id: z.string(),
      file: z.custom<File>((value) => value instanceof File),
    })
  ),
  body: z.string(),
  signature: z.string(),
});

export type CreatedLetter = z.infer<typeof letterCreatorSchema>;

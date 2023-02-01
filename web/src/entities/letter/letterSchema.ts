import { z } from "zod";

export const letterSchema = z.object({
  id: z.number(),
  author: z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string(),
    avatar: z.string().optional(),
  }),
  to: z.array(
    z.object({
      name: z.string(),
      surname: z.string(),
      email: z.string(),
      avatar: z.string().optional(),
    })
  ),
  title: z.string(),
  text: z.string(),
  bookmark: z.boolean(),
  important: z.boolean(),
  read: z.boolean(),
  folder: z.string().optional(),
  flag: z.string().optional(),
  date: z.string(),
  doc: z
    .object({
      img: z.string(),
    })
    .optional(),
});

export type Letter = z.infer<typeof letterSchema>;

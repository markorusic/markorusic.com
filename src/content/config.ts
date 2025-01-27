import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    externalUrl: z.string().optional(),
  }),
});

export const collections = { blog };

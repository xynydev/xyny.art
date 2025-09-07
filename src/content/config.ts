import { defineCollection, z } from "astro:content";
export const collections = {
  portfolio: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        desc: z.string(),
        gallery: z.array(
          z.object({
            sectiontitle: z.string(),
            sectiondesc: z.string(),
            images: z.array(
              z.object({
                img: image().optional(),
                url: z.string().optional(),
                alt: z.string(),
                caption: z.string(),
              }),
            ),
          }),
        ),
      }),
  }),
  writing: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        desc: z.string(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        date: z.date(),
        tags: z.array(z.string()).optional(),
        pinned: z.boolean().optional(),
      }),
  }),
  about: defineCollection({
    type: "content",
    schema: () =>
      z.object({
        shortbio: z.string(),
        subtexts: z.array(z.string()),
      }),
  }),
  links: defineCollection({
    type: "data",
    schema: () =>
      z.object({
        links: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
            category: z.enum(["contact", "consume", "chronicle", "code"]),
          }),
        ),
      }),
  }),
};

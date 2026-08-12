import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob, file } from 'astro/loaders';

export const collections = {
  portfolio: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/portfolio" }),
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
  about: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/about" }),
    schema: () =>
      z.object({
        shortbio: z.string(),
        subtexts: z.array(z.string()),
    }),
  }),
  links: defineCollection({
    loader: glob({ pattern: '**/[^_]*.yml', base: "./src/content/links" }),
    schema: () => z.array(
        z.object({
          name: z.string(),
          url: z.string(),
          category: z.enum(["contact", "consume", "chronicle", "code"]).optional(),
        }),
      ),
  }),
  blog: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        date: z.date(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        pinned: z.boolean().optional(),
        draft: z.boolean().optional(),
      }),
  }),
};

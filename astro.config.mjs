import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  image: {
    domains: ["s3.metapixl.com"],
    remotePatterns: [{ protocol: "https" }],
  },

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "svelte",
      }),
    ],
  },

  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: {
            className: ["header-anchor-link"],
          },
        },
      ],
    ],
  },
});

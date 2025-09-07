import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import unocss from "@unocss/astro";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    unocss({
      injectReset: true,
    }),
  ],
  image: {
    domains: ["s3.metapixl.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: {
            type: "text",
            value: "#",
          },
          properties: {
            className: ["header-anchor-link"],
          },
        },
      ],
    ],
  },
});

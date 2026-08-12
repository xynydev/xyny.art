import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

import { unified } from '@astrojs/markdown-remark';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { esmExternalRequirePlugin } from 'rolldown/plugins';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: "https://xyny.art",

  image: {
    domains: ["s3.metapixl.com"],
    remotePatterns: [{ protocol: "https" }],
  },

  compressHTML: true,

  vite: {
    build: {
      cssMinify: "esbuild",
    },
    css: {
      transformer: "postcss"
    },
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "svelte",
      }),
    ],
  },

  markdown: {
    processor: unified(),
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

  adapter: cloudflare({
    prerenderEnvironment: "node"
  }),
});

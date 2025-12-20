import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

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
});

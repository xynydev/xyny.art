import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import unocss from "@unocss/astro";

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
});

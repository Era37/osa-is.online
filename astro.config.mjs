import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

export default defineConfig({
  adapter: cloudflare({
    imageService: "passthrough"
  }),

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["highlight.js", "marked", "marked-highlight"]
    }
  },

  integrations: [svelte()]
});

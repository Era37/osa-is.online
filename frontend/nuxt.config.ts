import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://api.osa-is.online",
    },
  },
  experimental: {
    writeEarlyHints: false,
  },
  typescript: {
    strict: true,
  },
  css: ["~/assets/main.scss"],
});
